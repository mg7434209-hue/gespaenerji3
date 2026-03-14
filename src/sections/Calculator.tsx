import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Droplets, Zap, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const pumpOptions = [
  { value: '2.2', label: '3 HP (2.2 kW)' },
  { value: '4', label: '5.5 HP (4 kW)' },
  { value: '5.5', label: '7.5 HP (5.5 kW)' },
  { value: '7.5', label: '10 HP (7.5 kW)' },
  { value: '11', label: '15 HP (11 kW)' },
  { value: '15', label: '20 HP (15 kW)' },
  { value: '18.5', label: '25 HP (18.5 kW)' },
  { value: '22', label: '30 HP (22 kW)' },
  { value: '37', label: '50 HP (37 kW)' },
  { value: '55', label: '75 HP (55 kW)' },
  { value: '75', label: '100 HP (75 kW)' },
];

const panelOptions = [
  { value: '550', label: '550W Mono PERC' },
  { value: '540', label: '540W Bifacial' },
  { value: '570', label: '570W Half-Cut' },
];

export function CalculatorSection() {
  const [activeTab, setActiveTab] = useState<'fatura' | 'sulama'>('fatura');
  
  // Fatura Analizi State
  const [customerName, setCustomerName] = useState('');
  const [systemType, setSystemType] = useState<'auto' | 'ongrid' | 'hybrid'>('auto');
  const [faturaTutar, setFaturaTutar] = useState('');
  const [toplamTuketim, setToplamTuketim] = useState('');
  const [gunduzTuketim, setGunduzTuketim] = useState('');
  const [donem, setDonem] = useState('30');
  
  // Tarımsal Sulama State
  const [pompaGucu, setPompaGucu] = useState('2.2');
  const [panelTipi, setPanelTipi] = useState('550');
  const [kablo, setKablo] = useState('');
  
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<any>(null);

  const analyzeFatura = () => {
    const fatura = parseFloat(faturaTutar) || 0;
    const toplam = parseFloat(toplamTuketim) || 0;
    const gunduz = parseFloat(gunduzTuketim) || 0;
    const gun = parseInt(donem) || 30;
    
    const gunlukTuketim = toplam / gun;
    const gunluzTuketim = gunduz / gun;
    
    let sistemKw = 0;
    if (systemType === 'ongrid' || (systemType === 'auto' && gunduz > toplam * 0.6)) {
      sistemKw = Math.ceil((gunluzTuketim / 5) * 10) / 10;
    } else {
      sistemKw = Math.ceil((gunlukTuketim / 4) * 10) / 10;
    }
    
    const panelSayisi = Math.ceil((sistemKw * 1000) / 550);
    const panelAlani = panelSayisi * 2.645;
    const yillikTasarruf = fatura * 12 * 0.85;
    
    setResult({
      sistemKw,
      panelSayisi,
      panelAlani: panelAlani.toFixed(1),
      yillikTasarruf: Math.round(yillikTasarruf),
      aylikTasarruf: Math.round(fatura * 0.85),
    });
    setShowResult(true);
  };

  const calculateSulama = () => {
    const pompa = parseFloat(pompaGucu);
    const panel = parseInt(panelTipi);
    const kabloMetre = parseFloat(kablo) || 0;
    
    const calismaSaati = 6;
    const gunlukEnerji = pompa * calismaSaati;
    const panelSayisi = Math.ceil((gunlukEnerji * 1000) / (panel * 5));
    const invertorKw = Math.ceil(pompa * 1.25 * 10) / 10;
    
    let kabloKesiti = '4mm²';
    if (kabloMetre > 50) kabloKesiti = '6mm²';
    if (kabloMetre > 100) kabloKesiti = '10mm²';
    
    setResult({
      panelSayisi,
      invertorKw,
      kabloKesiti,
      kabloMetre: kabloMetre || 50,
      gunlukEnerji,
    });
    setShowResult(true);
  };

  const sendWhatsApp = () => {
    const phone = '905437434209';
    let message = '';
    
    if (activeTab === 'fatura') {
      message = `*GESPA Fatura Analizi*\\n\\n` +
        `👤 *Müşteri:* ${customerName}\\n` +
        `💰 *Fatura Tutarı:* ${faturaTutar} ₺\\n` +
        `⚡ *Toplam Tüketim:* ${toplamTuketim} kWh\\n` +
        `☀️ *Gündüz Tüketim:* ${gunduzTuketim} kWh\\n` +
        `📅 *Dönem:* ${donem} gün\\n` +
        `🔧 *Sistem Tipi:* ${systemType === 'auto' ? 'Otomatik' : systemType === 'ongrid' ? 'Aküsüz (On-Grid)' : 'Akülü (Hybrid)'}\\n\\n` +
        `📊 *Önerilen Sistem:*\\n` +
        `• Sistem Boyutu: ${result.sistemKw} kW\\n` +
        `• Panel Sayısı: ${result.panelSayisi} adet\\n` +
        `• Panel Alanı: ${result.panelAlani} m²\\n` +
        `• Tahmini Aylık Tasarruf: ${result.aylikTasarruf} ₺\\n\\n` +
        `Detaylı teklif için arayabilirsiniz.`;
    } else {
      message = `*GESPA Tarımsal Sulama Analizi*\\n\\n` +
        `👤 *Müşteri:* ${customerName || 'Belirtilmedi'}\\n` +
        `💧 *Pompa Gücü:* ${pumpOptions.find(p => p.value === pompaGucu)?.label}\\n` +
        `🔋 *Panel Tipi:* ${panelOptions.find(p => p.value === panelTipi)?.label}\\n` +
        `📏 *Kablo Mesafesi:* ${result.kabloMetre} m\\n\\n` +
        `📊 *Önerilen Sistem:*\\n` +
        `• Panel Sayısı: ${result.panelSayisi} adet\\n` +
        `• İnvertör: ${result.invertorKw} kW\\n` +
        `• Kablo Kesiti: ${result.kabloKesiti}\\n` +
        `• Günlük Enerji: ${result.gunlukEnerji} kWh\\n\\n` +
        `Detaylı teklif için arayabilirsiniz.`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="calculator" className="py-24 bg-light-gray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-brand-green/10 text-brand-green text-sm font-semibold rounded-full mb-4">
            <Calculator className="w-4 h-4 inline mr-1" />
            Hesaplama Aracı
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark font-['Poppins'] mb-4">
            Size Özel <span className="text-brand-green">Teklif</span> Alın
          </h2>
          <p className="text-lg text-body max-w-2xl mx-auto">
            Fatura analizi veya tarımsal sulama hesaplaması yapın, 
            WhatsApp üzerinden hemen teklif alın.
          </p>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="shadow-2xl border-0 overflow-hidden">
            {/* Tabs */}
            <div className="flex">
              <button
                onClick={() => { setActiveTab('fatura'); setShowResult(false); }}
                className={`flex-1 py-4 px-6 text-center font-semibold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'fatura'
                    ? 'bg-brand-green text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Zap className="w-5 h-5" />
                Fatura Analizi
              </button>
              <button
                onClick={() => { setActiveTab('sulama'); setShowResult(false); }}
                className={`flex-1 py-4 px-6 text-center font-semibold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'sulama'
                    ? 'bg-brand-green text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Droplets className="w-5 h-5" />
                Tarımsal Sulama
              </button>
            </div>

            <CardContent className="p-6 sm:p-8">
              {/* Customer Name */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  👤 Müşteri Adı Soyadı (*)
                </label>
                <Input
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Adınızı ve soyadınızı girin"
                  className="w-full"
                />
              </div>

              {activeTab === 'fatura' ? (
                /* Fatura Analizi Form */
                <div className="space-y-6">
                  {/* System Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      🔧 Hesap Modu
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { value: 'auto', label: 'Otomatik' },
                        { value: 'ongrid', label: 'Aküsüz (On-Grid)' },
                        { value: 'hybrid', label: 'Akülü (Hybrid)' },
                      ].map((type) => (
                        <button
                          key={type.value}
                          onClick={() => setSystemType(type.value as any)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            systemType === type.value
                              ? 'bg-brand-green text-white'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Input Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        💰 Fatura Tutarı (₺)
                      </label>
                      <Input
                        type="number"
                        value={faturaTutar}
                        onChange={(e) => setFaturaTutar(e.target.value)}
                        placeholder="Örn: 2500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ⚡ Toplam Tüketim (kWh)
                      </label>
                      <Input
                        type="number"
                        value={toplamTuketim}
                        onChange={(e) => setToplamTuketim(e.target.value)}
                        placeholder="Örn: 450"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ☀️ Gündüz Tüketimi (kWh)
                      </label>
                      <Input
                        type="number"
                        value={gunduzTuketim}
                        onChange={(e) => setGunduzTuketim(e.target.value)}
                        placeholder="Örn: 300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        📅 Dönem (Gün)
                      </label>
                      <Input
                        type="number"
                        value={donem}
                        onChange={(e) => setDonem(e.target.value)}
                        placeholder="30"
                      />
                    </div>
                  </div>

                  {/* Info Box */}
                  <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-700">
                    <strong>ℹ️ Bilgi:</strong> Aküsüz sistem gündüz tüketimi bazlı, 
                    akülü sistem toplam tüketim bazlı hesaplanır. 
                    Panel alanı: 2.30×1.15 = <strong>2.645 m²/panel</strong>
                  </div>

                  {/* Analyze Button */}
                  <Button
                    onClick={analyzeFatura}
                    className="w-full bg-brand-green hover:bg-brand-green-light text-white font-semibold py-4"
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Analiz Et
                  </Button>
                </div>
              ) : (
                /* Tarımsal Sulama Form */
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        💧 Pompa Gücü
                      </label>
                      <select
                        value={pompaGucu}
                        onChange={(e) => setPompaGucu(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                      >
                        {pumpOptions.map((pump) => (
                          <option key={pump.value} value={pump.value}>
                            {pump.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        🔋 Panel Tipi
                      </label>
                      <select
                        value={panelTipi}
                        onChange={(e) => setPanelTipi(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                      >
                        {panelOptions.map((panel) => (
                          <option key={panel.value} value={panel.value}>
                            {panel.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        📏 Kablo (m)
                      </label>
                      <Input
                        type="number"
                        value={kablo}
                        onChange={(e) => setKablo(e.target.value)}
                        placeholder="Örn: 80"
                      />
                    </div>
                  </div>

                  {/* Info Box */}
                  <div className="bg-green-50 p-4 rounded-lg text-sm text-green-700">
                    <strong>ℹ️ Bilgi:</strong> Pompa gücüne göre panel sayısı ve 
                    invertör boyutu otomatik hesaplanır. Kablo mesafesi uzadıkça 
n                    kesit artırılması önerilir.
                  </div>

                  {/* Calculate Button */}
                  <Button
                    onClick={calculateSulama}
                    className="w-full bg-brand-green hover:bg-brand-green-light text-white font-semibold py-4"
                  >
                    <Droplets className="w-5 h-5 mr-2" />
                    Boyutlandır
                  </Button>
                </div>
              )}

              {/* Results */}
              {showResult && result && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-8 pt-8 border-t border-gray-200"
                >
                  <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-brand-orange" />
                    Analiz Sonucu
                  </h3>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {activeTab === 'fatura' ? (
                      <>
                        <div className="bg-brand-green/10 p-4 rounded-xl">
                          <p className="text-sm text-gray-600">Sistem Boyutu</p>
                          <p className="text-2xl font-bold text-brand-green">{result.sistemKw} kW</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-xl">
                          <p className="text-sm text-gray-600">Panel Sayısı</p>
                          <p className="text-2xl font-bold text-blue-600">{result.panelSayisi} adet</p>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-xl">
                          <p className="text-sm text-gray-600">Panel Alanı</p>
                          <p className="text-2xl font-bold text-brand-orange">{result.panelAlani} m²</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-xl sm:col-span-2 lg:col-span-3">
                          <p className="text-sm text-gray-600">Tahmini Aylık Tasarruf</p>
                          <p className="text-3xl font-bold text-green-600">{result.aylikTasarruf.toLocaleString()} ₺</p>
                          <p className="text-sm text-gray-500 mt-1">Yıllık: {result.yillikTasarruf.toLocaleString()} ₺</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="bg-brand-green/10 p-4 rounded-xl">
                          <p className="text-sm text-gray-600">Panel Sayısı</p>
                          <p className="text-2xl font-bold text-brand-green">{result.panelSayisi} adet</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-xl">
                          <p className="text-sm text-gray-600">İnvertör</p>
                          <p className="text-2xl font-bold text-blue-600">{result.invertorKw} kW</p>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-xl">
                          <p className="text-sm text-gray-600">Kablo Kesiti</p>
                          <p className="text-2xl font-bold text-brand-orange">{result.kabloKesiti}</p>
                        </div>
                      </>
                    )}
                  </div>

                  {/* WhatsApp Button */}
                  <Button
                    onClick={sendWhatsApp}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp ile Teklif Al
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
