export interface FaqItem {
  question: string
  answer: string
}

export const faqData: FaqItem[] = [
  {
    question: 'SEO, GEO และ AEO แตกต่างกันอย่างไร?',
    answer:
      'SEO (Search Engine Optimization) คือการทำให้เว็บติดอันดับใน Google แบบดั้งเดิม GEO (Generative Engine Optimization) คือการทำให้ AI search engines อย่าง Perplexity หรือ Google AI Overviews อ้างอิงเนื้อหาของคุณ ส่วน AEO (Answer Engine Optimization) เน้นให้ AI answer engines เลือกใช้เนื้อหาของคุณเป็นคำตอบตรงๆ ให้ผู้ใช้',
  },
  {
    question: 'GEO คืออะไรและทำไมจึงสำคัญ?',
    answer:
      'GEO คือการปรับแต่งเว็บไซต์เพื่อให้ AI search engines อย่าง Perplexity, Google AI Overviews และ Bing Copilot ดึงข้อมูลจากเว็บของคุณไปใช้ตอบคำถาม มีความสำคัญเพราะผู้ใช้อินเทอร์เน็ตหันมาค้นหาผ่าน AI มากขึ้น การถูกอ้างอิงใน AI responses หมายถึง traffic และ brand awareness ที่เพิ่มขึ้นโดยไม่ต้องพึ่งพาแค่ Google rankings',
  },
  {
    question: 'AEO ต้องทำอะไรบ้าง?',
    answer:
      'AEO ต้องทำ 5 อย่างหลัก: (1) ติดตั้ง FAQPage JSON-LD schema, (2) เขียนหัวข้อ H2 เป็นคำถาม, (3) ตอบคำถามตรงๆ ในย่อหน้าแรกก่อนขยายความ, (4) ใช้ structured content รูปแบบ Q&A, (5) ครอบคลุมคำถาม Who, What, Where, When, Why, How ในแต่ละหัวข้อ',
  },
  {
    question: 'Structured Data คืออะไรและจำเป็นสำหรับ AI หรือเปล่า?',
    answer:
      'Structured Data คือข้อมูลที่จัดรูปแบบตาม schema.org เพื่อให้ search engines และ AI เข้าใจเนื้อหาเว็บได้ดีขึ้น JSON-LD เป็นรูปแบบที่แนะนำ จำเป็นมากสำหรับ AI เพราะช่วยให้ระบบ AI เข้าใจบริบทและความสัมพันธ์ของข้อมูลในเว็บไซต์ ทำให้มีโอกาสถูกอ้างอิงสูงขึ้น',
  },
  {
    question: 'llms.txt คืออะไรและต้องสร้างอย่างไร?',
    answer:
      'llms.txt เป็นไฟล์ Markdown ที่วางไว้ที่ /llms.txt บนเว็บไซต์ ตามมาตรฐาน llmstxt.org เพื่ออธิบายเนื้อหาเว็บให้ LLMs อย่าง Claude, ChatGPT เข้าใจโครงสร้างและจุดประสงค์ของเว็บไซต์ได้ง่ายขึ้น สร้างโดยวาง Markdown ที่มีหัวข้อ ลิงก์ และคำอธิบายสั้นๆ ของแต่ละหน้าสำคัญ',
  },
  {
    question: 'robots.txt ควรตั้งค่าอย่างไรสำหรับ AI crawlers?',
    answer:
      'ควร allow AI crawlers สำคัญ ได้แก่ GPTBot (OpenAI), ClaudeBot (Anthropic), Google-Extended (Google), PerplexityBot (Perplexity), Meta-ExternalAgent (Meta) โดยเพิ่ม rule แยกสำหรับแต่ละ user-agent พร้อม Allow: / เพื่อให้เข้าถึงเนื้อหาทั้งหมด',
  },
  {
    question: 'Open Graph ช่วย SEO/GEO อย่างไร?',
    answer:
      'Open Graph เป็น meta tags ที่ควบคุมการแสดงผลเมื่อแชร์ลิงก์บน social media และ AI tools บางตัว ช่วย GEO โดยให้ข้อมูลที่ชัดเจนเกี่ยวกับ title, description และ image ของแต่ละหน้า ซึ่ง AI ใช้ในการสรุปข้อมูลเว็บและอาจแสดงในผลการค้นหา',
  },
  {
    question: 'Next.js ดีสำหรับ SEO/GEO/AEO หรือเปล่า?',
    answer:
      'ใช่ Next.js เป็นหนึ่งใน framework ที่ดีที่สุดสำหรับ SEO/GEO/AEO เพราะรองรับ Server-Side Rendering (SSR) และ Static Site Generation (SSG), มี Metadata API ในตัว, รองรับ JSON-LD ผ่าน script tags และสร้าง robots.txt กับ sitemap.xml แบบ dynamic ได้ทั้งหมดในที่เดียว',
  },
  {
    question: 'Schema ไหนสำคัญที่สุดสำหรับ GEO?',
    answer:
      'Schema ที่สำคัญที่สุดสำหรับ GEO ได้แก่ Organization (บอกว่าเว็บเป็นขององค์กรอะไร), WebSite พร้อม SearchAction, Article สำหรับบทความ, FAQPage สำหรับ Q&A และ BreadcrumbList Schema เหล่านี้ช่วยให้ AI เข้าใจบริบทและโครงสร้างเว็บได้ดีขึ้น',
  },
  {
    question: 'เนื้อหาต้องเขียนอย่างไรให้ AI ดึงไปตอบ?',
    answer:
      'เขียนตรงๆ สั้นๆ ชัดเจน ใช้หัวข้อเป็นคำถาม ตอบในย่อหน้าแรกทันที อ้างอิงข้อมูลและสถิติที่น่าเชื่อถือ ใช้ lists และ tables สำหรับข้อมูลที่เปรียบเทียบได้ หลีกเลี่ยงเนื้อหาที่คลุมเครือ และระบุชื่อผู้เขียน วันที่เผยแพร่ชัดเจน',
  },
  {
    question: 'ต้องอัปเดตเนื้อหาบ่อยแค่ไหนสำหรับ GEO?',
    answer:
      'ควรอัปเดตเนื้อหาอย่างน้อยเดือนละครั้งและอัปเดต dateModified ใน Article schema เสมอ AI search engines ชอบเนื้อหาที่ทันสมัย บทความหลักควรตรวจสอบทุก 3-6 เดือน เนื้อหาที่ล้าสมัยอาจทำให้ AI เลือกอ้างอิงเว็บอื่นแทน',
  },
]
