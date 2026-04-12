import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/LegalPage';

export const metadata: Metadata = {
  title: 'Çerez Politikası — Nebim ERA',
  description: 'Nebim Neyir Bilgisayar Sanayii ve Hizmetleri A.Ş. Çerez Politikası',
};

export default function CerezPolitikasi() {
  return (
    <LegalPage
      current="Çerez Politikası"
      title="Çerez Politikası"
      subtitle="Nebim Neyir Bilgisayar Sanayii ve Hizmetleri A.Ş."
    >
      <p>İnternet sitemizden en iyi şekilde yararlanabilmeniz ve kullanıcı deneyiminizi geliştirebilmek için çerez kullanıyoruz. Bu metin, sitemizde kullanılan çerez türleri, çerezlerin ne amaçla kullanıldığı ve çerez ayarlarının nasıl yönetilip silinebileceği konusunda sizleri bilgilendirmek amacıyla hazırlanmıştır.</p>

      <h2>Çerez Nedir?</h2>
      <p>Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcınız aracılığıyla cihazınıza veya ağ sunucusuna yerleştirilen küçük metin dosyalarıdır. Bu dosyalar, internet deneyiminizi kişiselleştirerek, ihtiyaçlarınıza uygun sayfalar sunulmasını sağlar.</p>

      <h2>Çerezler Nasıl Toplanmaktadır?</h2>
      <p>Veriler, tarayıcılarınız aracılığıyla kullandığınız cihazlardan toplanmaktadır. Bu bilgiler, cihazlara özgü olup, istediğiniz zaman silinebilir ve erişimleri engellenebilir.</p>

      <h2>Çerez Türleri ve Kullanım Amaçları</h2>
      <p>Çerez türlerini, kullanım amaçlarına göre çerezler, sürelerine göre çerezler ve taraflarına göre çerezler olmak üzere üçlü bir tasnife tabi tutmak mümkündür.</p>

      <h3>1.1. Kullanım Amaçlarına Göre Çerezler</h3>
      <p>Şirket olarak, kullanım amaçlarına göre kullandığımız çerez türleri şunlardır:</p>
      <ul>
        <li>Zorunlu Tanımlama (Kesinlikle Gerekli) Çerezleri</li>
        <li>İzleme ve Performans Çerezleri</li>
        <li>Hedefleme ve Reklam Çerezleri</li>
      </ul>

      <h3>1.2. Sürelerine Göre Çerezler</h3>
      <p>Şirket olarak, sürelerine göre iki tür çerez kullanmaktayız. Bunlar, oturum çerezleri ve kalıcı çerezlerdir.</p>

      <h3>1.3. Taraflarına Göre</h3>
      <p><strong>1.3.1. Birinci Taraf Çerezler:</strong> Doğrudan ziyaret edilen İnternet Sitesi veya Şirket tarafından cihaza yerleştirilmektedir.</p>
      <p><strong>1.3.2. Üçüncü Taraf Çerezler:</strong> Şirket ile iş birliği içerisinde olan, reklam veren veya analitik sistem gibi üçüncü bir tarafça cihaza yerleştirilen çerezlerdir.</p>

      <h2>İnternet Sitemizde Kullanılan Çerezler ve Kullanım Amaçları</h2>

      <h3>Zorunlu Tanımlama (Kesinlikle Gerekli) Çerezler</h3>
      <p>Bu çerezler, size web sitemiz aracılığıyla sunulan hizmetleri sağlamak ve web sitemizin belirli özelliklerini kullanmanızı sağlamak için gereklidir. Bu çerezler olmadan, web sitemizde size belirli hizmetleri sağlayamayız.</p>

      <h3>İzleme ve Performans Çerezleri</h3>
      <p>Bu çerezler, web sitemize gelen trafiği ve ziyaretçilerin web sitemizi nasıl kullandığını analiz etmek için bilgi toplamak amacıyla kullanılır. Örneğin, çerezler, web sitesinde ne kadar zaman geçirdiğiniz veya ziyaret ettiğiniz sayfalar gibi şeyleri izleyebilir ve bu da web sitemizi sizin için nasıl iyileştirebileceğimizi anlamamıza yardımcı olur. Bu çerezler aracılığıyla toplanan bilgiler anonim olup herhangi bir bireysel ziyaretçiyi tanımlamaz.</p>

      <h3>Hedefleme ve Reklam Çerezleri</h3>
      <p>Bu çerezler, arama/gezinme alışkanlıklarınıza göre ilginizi çekebilecek reklamları göstermek için kullanılır. Bu çerezler, içerik ve/veya reklam sağlayıcılarımız tarafından, web sitemizden topladıkları bilgileri, web tarayıcınızın kendi web siteleri ağlarındaki faaliyetleriyle ilgili olarak bağımsız olarak topladıkları diğer bilgilerle birleştirilebilir. Bu çerezleri kaldırmayı veya devre dışı bırakmayı seçerseniz, reklamları görmeye devam edersiniz, ancak bunlar sizinle alakalı olmayabilir.</p>

      <h2>Çerez Verilerinin Aktarılması</h2>
      <p>Hedefleme ve reklam çerezleri, web sitemizde veya sitemiz haricindeki mecralarda ürün ve hizmet tanıtımını yapmak, işbirliği yaptığımız ortaklarımızla birlikte size ilgili ve kişiselleştirilmiş reklamlar göstermek, reklam kampanyalarının etkinliğini ölçmek için kullanılır. Web sitesi kullanıcısının karşılaştığı reklamların istatistiksel verileri, pazarlama çerezleri yoluyla elde edilen veriler, diğer kuruluşlarla veya reklam verenlerle paylaşılmaktadır.</p>

      <h2>Çerezleri Nasıl Kontrol Edebilirsiniz?</h2>
      <p>Çerezleri yönetmek, tarayıcıdan tarayıcıya farklılık gösterdiğinden ayrıntılı bilgi almak için tarayıcının veya uygulamanın yardım menüsünden faydalanabilirsiniz.</p>

      <h3>Google Chrome için:</h3>
      <p>&quot;Google Chrome → Ayarlar → Gizlilik ve Güvenlik → Çerezler ve Diğer Site Verileri&quot; seçeneği ile çerezlerinizi yönetebilirsiniz.</p>

      <h3>Internet Explorer için:</h3>
      <p>&quot;Internet Explorer → Ayarlar → İnternet Seçenekleri → Gizlilik → Gelişmiş&quot; menüsünü kullanarak çerezlerinizi yönetebilirsiniz.</p>

      <h3>Mobil Cihazlarda</h3>
      <h3>Apple Cihazlarda:</h3>
      <p>&quot;Ayarlar → Safari → Geçmişi ve Web Sitesi Verilerini Sil&quot; adımları ile tarama geçmişinizi ve tutulan çerezleri temizleyebilirsiniz.</p>
      <p>Çerezleri silip geçmişinizi tutmak için &quot;Ayarlar → Safari → İleri Düzey → Web Sitesi Verileri → Tüm Web Sitesi Verilerini Sil&quot; adımlarını izleyebilirsiniz.</p>
      <p>Siteleri ziyaret ettiğinizde geçmiş verilerinizin tutulmasını istemiyorsanız; &quot;Safari → simgesi → Özel → Bitti&quot; adımlarını izleyerek özel dolaşımınızı aktif hale getirebilirsiniz.</p>
      <p>Çerezleri engellemek için &quot;Ayarlar → Safari → Tüm Çerezleri Engelle&quot; adımlarını takip edebilirsiniz. Ancak; çerezleri engellediğiniz zaman bazı web siteleri ve özellikler düzgün çalışmayabilir.</p>

      <h3>Android Cihazlarda:</h3>
      <p>Çerezlerinizi temizlemek için &quot;Chrome uygulaması → Ayarlar → Gizlilik → Tarama verilerini temizle → Çerezler, medya lisansları ve site verileri → Verileri Temizle&quot; adımlarını takip edebilirsiniz.</p>
      <p>&quot;Chrome Uygulaması → Ayarlar → Site Ayarları → Çerezler&quot; seçeneği ile çerezlere izin verebilir veya engelleyebilirsiniz.</p>

      <h2>Haklarınız ve Talepleriniz İçin İletişim</h2>
      <p>KVKK&apos;nın 11. maddesinde yer alan haklarınız aşağıdadır:</p>
      <ul>
        <li>Kişisel veri işlenip işlenmediğini öğrenme</li>
        <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme</li>
        <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
        <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</li>
        <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
        <li>Kişisel verilerin silinmesini veya yok edilmesini isteme</li>
        <li>Kişisel verilerin düzeltilmesi, silinmesi ya da yok edilmesi halinde bu işlemlerin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
        <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme</li>
        <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme</li>
      </ul>

      <p>Kişisel verilerinizle ilgili sorularınızı ve KVKK&apos;nın 11. maddesinde yer alan hak ve taleplerinizi, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğde belirtilen şartlara uygun düzenlenmiş dilekçeyle 0630003487100013 MERSİS No&apos;lu Esentepe Mah. Harman 1 Sk. Nida Kule Blok No: 7-9 İç Kapı No: 68 Şişli / İstanbul adresine şahsen yazılı başvurarak veya noter aracılığıyla yahut Güvenli Elektronik İmza veya Mobil İmza ile imzalamak suretiyle Kayıtlı Elektronik Posta (KEP) adresimize <a href="mailto:nebim@hs03.kep.tr">nebim@hs03.kep.tr</a> iletebilirsiniz.</p>
    </LegalPage>
  );
}
