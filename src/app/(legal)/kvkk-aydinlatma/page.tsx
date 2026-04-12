import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/LegalPage';

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni — Nebim ERA',
  description: 'Nebim Neyir Bilgisayar Sanayii ve Hizmetleri A.Ş. Kişisel Verilerin Korunması Politikası',
};

export default function KvkkAydinlatma() {
  return (
    <LegalPage
      current="KVKK Aydınlatma"
      title="Kişisel Verilerin Korunması Politikası"
      subtitle="Nebim Neyir Bilgisayar Sanayii ve Hizmetleri A.Ş."
    >
      <h2>1. Amaç</h2>
      <p>Yürürlükte bulunan 6698 sayılı Kişisel Verilerin Korunması hakkındaki Kanunu ile, kişisel verilerin işlenmesinde, başta özel hayatın gizliliği olmak üzere kişilerin temel hak ve özgürlüklerinin korunması ve kişisel verileri işleyen gerçek ve tüzel kişilerin yükümlülükleri ile uyacakları usul ve esaslar düzenlenmiştir.</p>
      <p>Söz konusu düzenleme de dikkate alınarak hazırlanan politikamızın amacı; kişisel verilerin korunması hakkındaki yükümlülüklere uyumun sağlanması, kuruluşumuzun gerçekleştirdiği faaliyetler kapsamında temin edilen bilgilerin işlenmesi, aktarılması ve gizliliğinin korunması ile ilgili hususların risk temelli bir yaklaşımla değerlendirilerek, stratejilerin, kurum içi kontrol ve önlemlerin, işleyiş kurallarının ve sorumlulukların belirlenmesi ile kurum çalışanlarının bu konularda bilinçlendirilmesidir.</p>
      <p>Aynı zamanda; müşterilerimiz, potansiyel müşterilerimiz, çalışanlarımız, çalışan adaylarımız, Kuruluş hissedarlarımız, Kuruluş yetkililerimiz, ziyaretçilerimiz, işbirliği içinde olduğumuz kurum/kuruluşların çalışanları, hissedarları ve yetkilileri ve üçüncü kişiler başta olmak üzere kişisel verileri Kuruluşumuz tarafından işlenen kişileri bilgilendirilerek şeffaflığı sağlamak amaçlanmaktadır.</p>

      <h2>2. Kapsam</h2>
      <p>Bu politika; müşterilerimizin, potansiyel müşterilerimizin, çalışanlarımızın, çalışan adaylarımızın, Şirket hissedarlarının, Şirket yetkililerinin, ziyaretçilerimizin, iş birliği içinde olduğumuz kurumların çalışanları, hissedarları ve yetkililerinin ve üçüncü kişilerin otomatik olan ya da herhangi bir veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan yollarla işlenen tüm kişisel verilerine ilişkindir.</p>

      <h2>3. Tanım ve Kısaltmalar</h2>
      <table>
        <thead>
          <tr>
            <th>Terim</th>
            <th>Tanım / Açıklamalar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Açık Rıza</td>
            <td>Belirli bir konuya ilişkin bilgilendirilmeye dayanan ve özgür iradeyle açıklanan rıza.</td>
          </tr>
          <tr>
            <td>Anonim Hale Getirme</td>
            <td>Kişisel verinin, kimliği belli veya belirlenebilir biri ile ilişkilendirilebilme niteliğini kaybedecek ve bu durumun geri alınamayacağı şekilde değiştirilmesidir.</td>
          </tr>
          <tr>
            <td>Kişisel Veri</td>
            <td>Kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgi. Örneğin; ad-soyad, TC, e-posta, adres, doğum tarihi, kredi kartı numarası vb.</td>
          </tr>
          <tr>
            <td>Özel Nitelikli Kişisel Veri</td>
            <td>Irk, etnik köken, siyasi düşünce, felsefi inanç, din, mezhep veya diğer inançlar, kılık kıyafet, dernek vakıf ya da sendika üyeliği, sağlık, cinsel hayat, ceza mahkûmiyeti ve güvenlik tedbirleriyle ilgili veriler ile biyometrik ve genetik veriler.</td>
          </tr>
          <tr>
            <td>Veri İşleyen</td>
            <td>Veri sorumlusunun verdiği yetkiye dayanarak onun adına kişisel veri işleyen gerçek ve tüzel kişidir.</td>
          </tr>
          <tr>
            <td>Veri Sorumlusu</td>
            <td>Kişisel verilerin işlenme amaçlarını ve vasıtalarını belirleyen, verilerin sistematik bir şekilde tutulduğu yeri yöneten kişi.</td>
          </tr>
          <tr>
            <td>Kişisel Verilerin İşlenmesi</td>
            <td>Kişisel verilerin tamamen veya kısmen otomatik olan ya da herhangi bir veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan yollarla elde edilmesi, kaydedilmesi, depolanması, muhafaza edilmesi, değiştirilmesi, yeniden düzenlenmesi, açıklanması, aktarılması, devralınması, elde edilebilir hâle getirilmesi, sınıflandırılması ya da kullanılmasının engellenmesi gibi veriler üzerinde gerçekleştirilen her türlü işlem.</td>
          </tr>
          <tr>
            <td>Kişisel Veri Sahibi</td>
            <td>Kişisel verisi işlenen gerçek kişi. Örneğin; müşteriler ve çalışanlar.</td>
          </tr>
          <tr>
            <td>Müşteri</td>
            <td>Şirket ile herhangi bir sözleşmesel ilişkisi olup olmadığına bakılmaksızın Şirketin sunmuş olduğu ürün ve hizmetleri kullanan veya kullanmış olan gerçek kişiler.</td>
          </tr>
          <tr>
            <td>KVKK</td>
            <td>6698 sayılı Kanun, 7 Nisan 2016 tarihli ve 29677 sayılı Resmi Gazete&apos;de yayımlanan, 24 Mart 2016 tarihli ve 6698 sayılı Kişisel Verilerin Korunması Kanunu.</td>
          </tr>
        </tbody>
      </table>

      <h2>4. Uygulamalar</h2>

      <h3>4.1. Veri Kategorileri</h3>
      <p>Kuruluş aşağıdaki veri kategorilerine ilişkin verileri kaydedebilir, işleyebilir veya aktarabilir:</p>
      <ul>
        <li><strong>Kimlik:</strong> Ad soyad, anne-baba adı, anne kızlık soyadı, doğum tarihi, doğum yeri, medeni hali, nüfus cüzdanı seri sıra no, TC kimlik no gibi</li>
        <li><strong>İletişim:</strong> Adres, e-posta adresi, kayıtlı elektronik posta adresi (KEP), telefon no gibi</li>
        <li><strong>Lokasyon:</strong> Bulunduğu yerin konum bilgileri</li>
        <li><strong>Özlük:</strong> Bordro bilgileri, disiplin soruşturması, işe giriş-çıkış belgesi kayıtları, mal bildirimi bilgileri, özgeçmiş bilgileri, performans değerlendirme raporları gibi</li>
        <li><strong>Hukuki İşlem:</strong> Adli makamlarla yazışmalardaki bilgiler, dava dosyasındaki bilgiler gibi</li>
        <li><strong>Müşteri İşlem:</strong> Çağrı merkezi kayıtları, fatura, senet, çek bilgileri, gişe dekontlarındaki bilgiler, sipariş bilgisi, talep bilgisi gibi</li>
        <li><strong>Fiziksel Mekân Güvenliği:</strong> Çalışan ve ziyaretçilerin giriş çıkış kayıt bilgileri, kamera kayıtları gibi</li>
        <li><strong>İşlem Güvenliği:</strong> IP adresi bilgileri, internet sitesi giriş çıkış bilgileri, şifre ve parola bilgileri gibi</li>
        <li><strong>Finans:</strong> Bilanço bilgileri, finansal performans bilgileri, kredi ve risk bilgileri, mal varlığı bilgileri gibi</li>
        <li><strong>Mesleki Deneyim:</strong> Diploma bilgileri, gidilen kurslar, meslek içi eğitim bilgileri, sertifikalar, transkript bilgileri gibi</li>
        <li><strong>Pazarlama:</strong> Alışveriş geçmişi bilgileri, anket, çerez kayıtları, kampanya çalışmasıyla elde edilen bilgiler</li>
        <li><strong>Görsel ve İşitsel Kayıtlar:</strong> Görsel ve işitsel kayıtlar gibi</li>
        <li><strong>Sağlık Bilgileri:</strong> Engellilik durumuna ait bilgiler, kan grubu bilgisi, kişisel sağlık bilgileri, kullanılan cihaz ve protez bilgileri gibi</li>
      </ul>

      <h3>4.2. Kişisel Veri İşleme Amaçları</h3>
      <p>Kuruluşumuz aşağıdaki amaçlara göre kişisel verileri kaydedebilir, işleyebilir veya aktarabilir:</p>
      <ul>
        <li>Acil Durum Yönetimi Süreçlerinin Yürütülmesi</li>
        <li>Bilgi Güvenliği Süreçlerinin Yürütülmesi</li>
        <li>Çalışan Adayı / Stajyer / Öğrenci Seçme Ve Yerleştirme Süreçlerinin Yürütülmesi</li>
        <li>Çalışanlar İçin İş Akdi Ve Mevzuattan Kaynaklı Yükümlülüklerin Yerine Getirilmesi</li>
        <li>Eğitim Faaliyetlerinin Yürütülmesi</li>
        <li>Faaliyetlerin Mevzuata Uygun Yürütülmesi</li>
        <li>Finans Ve Muhasebe İşlerinin Yürütülmesi</li>
        <li>Fiziksel Mekan Güvenliğinin Temini</li>
        <li>Hukuk İşlerinin Takibi Ve Yürütülmesi</li>
        <li>İletişim Faaliyetlerinin Yürütülmesi</li>
        <li>İnsan Kaynakları Süreçlerinin Planlanması</li>
        <li>İş Faaliyetlerinin Yürütülmesi / Denetimi</li>
        <li>İş Sağlığı / Güvenliği Faaliyetlerinin Yürütülmesi</li>
        <li>Mal / Hizmet Satış Süreçlerinin Yürütülmesi</li>
        <li>Müşteri İlişkileri Yönetimi Süreçlerinin Yürütülmesi</li>
        <li>Pazarlama Analiz Çalışmalarının Yürütülmesi</li>
        <li>Reklam / Kampanya / Promosyon Süreçlerinin Yürütülmesi</li>
        <li>Risk Yönetimi Süreçlerinin Yürütülmesi</li>
        <li>Saklama Ve Arşiv Faaliyetlerinin Yürütülmesi</li>
        <li>Sözleşme Süreçlerinin Yürütülmesi</li>
        <li>Stratejik Planlama Faaliyetlerinin Yürütülmesi</li>
        <li>Talep / Şikayetlerin Takibi</li>
        <li>Ürün / Hizmetlerin Pazarlama Süreçlerinin Yürütülmesi</li>
        <li>Veri Sorumlusu Operasyonlarının Güvenliğinin Temini</li>
        <li>Yetkili Kişi, Kurum Ve Kuruluşlara Bilgi Verilmesi</li>
        <li>Yönetim Faaliyetlerinin Yürütülmesi</li>
        <li>Ziyaretçi Kayıtlarının Oluşturulması Ve Takibi</li>
      </ul>

      <h3>4.3. Kişisel Veri Aktarım Alıcı Grupları</h3>
      <p>Kuruluşumuz aşağıdaki Kişisel Veri Aktarı Alıcı gruplarına kişisel verileri aktarabilir:</p>
      <ul>
        <li>Gerçek Kişiler Ve Özel Hukuk Tüzel Kişileri</li>
        <li>Hissedarlar</li>
        <li>İş Ortağı</li>
        <li>İştirak Ve Bağlı Ortaklıklar</li>
        <li>Tedarikçi</li>
        <li>Topluluk Şirketi</li>
        <li>Yetkili Kamu Kurum Ve Kuruluşları</li>
      </ul>

      <h3>4.4. Kişisel Veri Konusu Kişiler</h3>
      <p>Kuruluşumuz aşağıdaki kişi türlerine göre kişisel verileri kaydedebilir, işleyebilir veya aktarabilir:</p>
      <ul>
        <li>Çalışan Adayı</li>
        <li>Çalışan</li>
        <li>Hissedar/Ortak</li>
        <li>Potansiyel Ürün Ve Hizmet Alıcısı</li>
        <li>Stajyer</li>
        <li>Tedarikçi Çalışan</li>
        <li>Tedarikçi Yetkilisi</li>
        <li>Ürün Veya Hizmet Alan Kişi</li>
        <li>Veli/Vasi/Temsilci</li>
        <li>Ziyaretçi</li>
      </ul>

      <h3>4.5. Kişisel Veri Saklama Süreleri</h3>
      <p>Kişisel verileri saklama süreleri; Kişisel Veri Saklama ve İmha Politikasında ayrıntılı olarak düzenlenmiştir.</p>

      <h3>4.6. Kişisel Verilerin Silinmesi, Yok Edilmesi veya Anonim Hale Getirilmesi</h3>
      <p>Kişisel verilerin hukuka uygun olarak işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması hâlinde bu veriler, resen veya ilgili kişinin talebi üzerine veri sorumlusu tarafından silinir, yok edilir veya anonim hâle getirilir.</p>
      <p>Veri sorumlusu, kişisel verileri silme, yok etme veya anonim hale getirme yükümlülüğünün ortaya çıktığı tarihi takip eden ilk periyodik imha işleminde, kişisel verileri siler, yok eder veya anonim hale getirir.</p>

      <h3>4.7. Kişisel Verilerin Aktarılması</h3>
      <p>Kanunda belirtilen genel ilkeler çerçevesinde işlenmek üzere elde edilen kişisel veriler, Kanunda belirtilen şekillerde üçüncü kişilere aktarılabilir.</p>
      <p><strong>Yurtiçi aktarım:</strong> Kişisel veriler ve özel nitelikli kişisel veriler ilgili kişinin açık rızası olmaksızın aktarılamaz. İstisna olarak ilgili kişinin açık rızası aranmaksızın, kişisel verilerin üçüncü kişilere aktarılabileceği şartlar Kanunda belirtilmiştir.</p>
      <p><strong>Yurt dışı aktarım:</strong> 6698 sayılı Kanununda yapılan değişiklikle kişisel verilerin yurt dışına aktarımında aşamalı bir rejim yürürlüğe konulmuştur. Bu kapsamda kişisel veriler; Kanun&apos;un 5 inci ve 6 ncı maddelerinde belirtilen şartlardan birinin varlığı ve aktarımın yapılacağı ülke, ülke içerisindeki sektörler veya uluslararası kuruluşlar hakkında yeterlilik kararı bulunması halinde yurt dışına aktarılabilir.</p>

      <h3>4.8. Kişisel Verilerin İşlenmesinde Genel (Temel) İlkeler</h3>
      <ul>
        <li>Hukuka ve dürüstlük kurallarına uygun olma</li>
        <li>Doğru ve gerektiğinde güncel olma</li>
        <li>Belirli, açık ve meşru amaçlar için işlenme</li>
        <li>İşlendikleri amaçla bağlantılı, sınırlı ve ölçülü olma</li>
        <li>İlgili mevzuatta öngörülen veya işlendikleri amaç için gerekli olan süre kadar muhafaza edilme</li>
      </ul>

      <h3>4.9. Açık Rıza</h3>
      <p>Belirli bir konuya ilişkin, bilgilendirilmeye dayanan ve özgür iradeyle açıklanan rızadır. Açık rızanın belirli bir konuya ilişkin olması, rızanın bilgilendirmeye dayanması ve özgür iradeyle açıklanması gereklidir.</p>

      <h3>4.10. Aydınlatma Yükümlülüğü</h3>
      <p>Kişisel verilerin elde edilmesi sırasında şirket tarafından ilgili kişiler bilgilendirilir. Bu bilgilendirme asgari olarak aşağıdaki konuları içermektedir:</p>
      <ul>
        <li>Veri sorumlusunun ve varsa temsilcisinin kimliği</li>
        <li>Kişisel verilerin hangi amaçla işleneceği</li>
        <li>Kişisel verilerin kimlere ve hangi amaçla aktarılabileceği</li>
        <li>Kişisel veri toplamanın yöntemi ve hukuki sebebi</li>
        <li>İlgili kişinin Kanunun 11 inci maddesinde sayılan diğer hakları</li>
      </ul>

      <h3>4.11. İlgili Kişinin Hakları</h3>
      <p>Kanunun ilgili kişinin haklarını düzenleyen 11. maddesi gereği ilgili kişiler kişisel verilerinin:</p>
      <ul>
        <li>İşlenip işlenmediğini öğrenme</li>
        <li>İşlenmişse bilgi talep etme</li>
        <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
        <li>Yurt içinde / yurt dışında aktarıldığı 3. kişileri bilme</li>
        <li>Eksik / yanlış işlenmişse düzeltilmesini isteme</li>
        <li>KVKK&apos;nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini / yok edilmesini isteme</li>
        <li>Aktarıldığı 3. kişilere yapılan işlemlerin bildirilmesini isteme</li>
        <li>Münhasıran otomatik sistemler ile analiz edilmesi nedeniyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
        <li>Kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme</li>
      </ul>

      <h3>4.12. İlgili Kişinin Hak Arama Yöntemleri</h3>
      <p><strong>Başvuru:</strong> İlgili kişilerin, sahip oldukları hakları kullanabilmeleri için öncelikle veri sorumlusuna başvurmaları zorunludur. Bu yol tüketilmeden Kurula şikâyet yoluna gidilemez.</p>
      <p><strong>Başvuru Yolu:</strong> &quot;Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ&quot;e göre 0630003487100013 MERSİS No&apos;lu Esentepe Mah. Harman 1 Sk. Nida Kule Blok No: 7-9 İç Kapı No: 68 Şişli / İstanbul adresine yazılı olarak veya <a href="mailto:nebim@hs03.kep.tr">nebim@hs03.kep.tr</a> kayıtlı elektronik posta aracılığıyla iletebilirsiniz.</p>
      <p><strong>Şikayet:</strong> İlgili kişinin şikayet yoluna başvurulabilmesi için Şirkete başvurunun reddedilmesi, verilen cevabın yetersiz bulunması veya 30 gün içinde başvuruya cevap verilmemiş olması gereklidir.</p>

      <h3>4.13. Kişisel Veri Güvenliği Tedbirleri</h3>
      <p>Kuruluşumuz kişisel verilerin hukuka aykırı olarak işlenmesini önlemek, kişisel verilere hukuka aykırı olarak erişilmesini önlemek ve kişisel verilerin muhafazasını sağlamak için aşağıdaki teknik ve idari tedbirleri almaktadır:</p>
      <ul>
        <li>Ağ güvenliği ve uygulama güvenliği sağlanmaktadır</li>
        <li>Ağ yoluyla kişisel veri aktarımlarında kapalı sistem ağ kullanılmaktadır</li>
        <li>Bilgi teknolojileri sistemleri tedarik, geliştirme ve bakımı kapsamındaki güvenlik önlemleri alınmaktadır</li>
        <li>Çalışanlar için veri güvenliği konusunda belli aralıklarla eğitim ve farkındalık çalışmaları yapılmaktadır</li>
        <li>Çalışanlar için yetki matrisi oluşturulmuştur</li>
        <li>Erişim logları düzenli olarak tutulmaktadır</li>
        <li>Gizlilik taahhütnameleri yapılmaktadır</li>
        <li>Güncel anti-virüs sistemleri kullanılmaktadır</li>
        <li>Güvenlik duvarları kullanılmaktadır</li>
        <li>Kişisel veri güvenliği sorunları hızlı bir şekilde raporlanmaktadır</li>
        <li>Kişisel veriler yedeklenmekte ve yedeklenen kişisel verilerin güvenliği de sağlanmaktadır</li>
        <li>Kurum içi periyodik ve/veya rastgele denetimler yapılmakta ve yaptırılmaktadır</li>
        <li>Log kayıtları kullanıcı müdahalesi olmayacak şekilde tutulmaktadır</li>
        <li>Özel nitelikli kişisel veriler için güvenli şifreleme / kriptografik anahtarlar kullanılmaktadır</li>
        <li>Saldırı tespit ve önleme sistemleri kullanılmaktadır</li>
        <li>Sızma testi uygulanmaktadır</li>
        <li>Siber güvenlik önlemleri alınmış olup uygulanması sürekli takip edilmektedir</li>
        <li>Veri kaybı önleme yazılımları kullanılmaktadır</li>
      </ul>
    </LegalPage>
  );
}
