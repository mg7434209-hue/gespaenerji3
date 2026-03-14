import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Neden Güneş Enerjisi?',
    answer:
      'Güneş enerjisi, yenilenebilir ve temiz bir enerji kaynağıdır. Elektrik faturalarınızı düşürür, çevreyi korur ve enerji bağımsızlığı sağlar. Ayrıca devlet teşvikleri sayesinde yatırım maliyeti oldukça düşüktür.',
  },
  {
    question: 'Güneş Enerjisinin Avantajları Nelerdir?',
    answer:
      'Yüksek tasarruf, uzun ömürlü sistemler, düşük bakım maliyeti, çevre dostu olması, devlet teşvikleri ve gayrimenkul değerini artırması başlıca avantajlarıdır. 25 yıl boyunca sorunsuz enerji üretimi sağlar.',
  },
  {
    question: 'Güneş Enerjisi Maliyetli Mi?',
    answer:
      'Başlangıç maliyeti olsa da, ortalama 5-7 yılda kendini amorti eder. 25 yıl garanti ile uzun vadede büyük tasarruf sağlar. Devlet teşvikleri ve vergi indirimleri maliyeti daha da düşürür.',
  },
  {
    question: 'Fazla Enerjiyi Satabilir Miyim?',
    answer:
      'Evet, ürettiğiniz fazla elektriği dağıtım şirketine satabilir veya lisansız üretim kapsamında değerlendirebilirsiniz. Bu sayede yatırımınız daha hızlı geri döner.',
  },
  {
    question: 'Güneş Enerjisi Panellerinin Ömrü Ne Kadar?',
    answer:
      'Kaliteli paneller 25-30 yıl ömürlüdür. GESPA olarak tüm panellerimizde 25 yıl performans garantisi sunuyoruz. İnvertörler için 5-10 yıl garanti verilmektedir.',
  },
  {
    question: 'Kurulum Ne Kadar Sürer?',
    answer:
      'Tipik bir ev kurulumu 1-3 gün sürmektedir. Büyük ölçekli projeler için süre değişkenlik gösterebilir. Keşif sonrası size özel bir zaman planı sunulmaktadır.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="inline-block px-4 py-1 bg-brand-green/10 text-brand-green text-sm font-semibold rounded-full mb-4">
              SSS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark font-['Poppins'] mb-6">
              Sıkça Sorulan{' '}
              <span className="text-brand-green">Sorular</span>
            </h2>
            <p className="text-lg text-body mb-8">
              Güneş enerjisi hakkında merak edilenler ve uzman ekibimizin
              yanıtları. Daha fazla bilgi için bizimle iletişime geçebilirsiniz.
            </p>
            <div className="flex items-center gap-4 p-4 bg-light-gray rounded-xl">
              <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl font-bold">?</span>
              </div>
              <div>
                <p className="font-semibold text-dark">Başka sorularınız mı var?</p>
                <p className="text-sm text-gray-500">
                  Bize ulaşın, yardımcı olalım.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-xl px-6 data-[state=open]:border-brand-green data-[state=open]:shadow-lg transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-dark hover:text-brand-green hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-body pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
