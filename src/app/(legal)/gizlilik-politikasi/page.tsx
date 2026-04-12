import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/LegalPage';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası — Nebim ERA',
  description: 'Nebim Neyir Bilgisayar Sanayii ve Hizmetleri A.Ş. Gizlilik Politikası',
};

export default function GizlilikPolitikasi() {
  return (
    <LegalPage
      current="Gizlilik Politikası"
      title="Gizlilik Politikası"
      subtitle="Nebim Neyir Bilgisayar Sanayii ve Hizmetleri A.Ş."
    >
      <p>Nebim Neyir Bilgisayar Sanayii ve Hizmetleri A.Ş. kullanıcı memnuniyeti ve güvenliği odaklı hizmet felsefesi ile faaliyet alanı gereği, kullanıcı bilgilerinin gizliliğini ve güvenliğini en üst seviyede sağlama konusunda gerekli tedbirleri almakta ve bu doğrultuda internet sitesinde (www.nebim.com.tr) aşağıda belirtilen hususları uygulamaktadır.</p>
      <p>Kuruluşumuzun internet sitesi üzerinden, yalnızca ürün ve hizmet başvuru/kullanımı için kullanıcı bilgileri alınmaktadır. Alınan bu kullanıcı bilgileri veya mevcut kayıtlı bilgiler kullanılarak ilgili yazılım hizmetine ilişkin işlemler yapılabilmektedir.</p>
      <p>Kuruluşumuz internet sitesi veya şubesi üzerinden ürün ve hizmet kullanımı için talep edilen veya kuruluşumuzun sisteminde var olan ve internet sitesi üzerinden görüntülenebilen kullanıcılara ait her türlü kişisel veri, kullanıcı bilgilerine erişim yetkisi bulunan resmi kurumlar ve yetkilileri ile 6698 sayılı Kişisel Verilerin Korunması Kanununa uygun şekilde kişisel bilgiler paylaşılabilecektir.</p>
      <p>Kullanıcıların internet sitesi üzerinden girmiş olduğu bilgilere 3. kişilerin erişimi engellenmiştir. Kullanıcıların kişisel verilerinin gizliliğini korumak amacıyla kuruluşumuz bilgi güvenliği alt yapısını en güvenilir seviyede tutarak gerekli önlemler almıştır.</p>
      <p>Kuruluşumuz, gerekli gördüğü durumlarda farklı kuruluşlardan destek hizmeti almakta ve ilgili kuruluşların kuruluşumuzun gizlilik standartlarına ve şartlarına uygun hareket etmesini 6361 sayılı kanuna bağlı alt mevzuat kapsamında temin etmektedir.</p>
      <p>Kullanıcıların, Kuruluşumuza ait veri tabanındaki bilgilerine erişebilmeleri için kendilerini doğru biçimde sistemlerimize tanıtmaları gerekmektedir. Buradaki sorumluluk tamamen kullanıcılara aittir.</p>
      <p>Kuruluşumuzun internet sitesinde bulunan bilgi, materyal ve bunların düzenlenmesi konusundaki telif hakları, Nebim Neyir Bilgisayar Sanayii ve Hizmetleri A.Ş.&apos;ye aittir.</p>
      <p>Kuruluşumuzun internet sitesine giriş yapılması ile yukarıda belirtilen koşulların kabul edildiği anlamına gelmekte olup, kuruluşumuz bu yasal uyarıda yer alan koşulları ve hükümleri önceden bir ihbara gerek kalmaksızın değiştirme ve güncelleme hakkına sahiptir.</p>
      <p>Saygılarımızla,<br/><strong>Nebim Neyir Bilgisayar Sanayii ve Hizmetleri A.Ş.</strong></p>

      <h2>İletişim Bilgileri</h2>
      <p>
        <strong>Adres:</strong> Merkez Ofis: Esentepe Mah. Harman 1 Sok. Nida Kule Blok No: 7-9 İç Kapı No: 68 Şişli 34394 / İstanbul<br/>
        <strong>Telefon:</strong> +90 212 275 07 75 (pbx)<br/>
        <strong>İnternet Adresi:</strong> <a href="https://www.nebim.com.tr" target="_blank" rel="noopener noreferrer">nebim.com.tr</a><br/>
        <strong>Vergi Dairesi:</strong> Boğaziçi Kurumlar<br/>
        <strong>Vergi No:</strong> 6300034871<br/>
        <strong>Mersis No:</strong> 0630003487100013
      </p>
    </LegalPage>
  );
}
