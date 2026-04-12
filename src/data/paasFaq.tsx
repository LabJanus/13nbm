import type { ReactNode } from 'react';

export type FaqItem = {
  id: string;
  question: string;
  answer: ReactNode;
};

export type FaqGroup = {
  id: string;
  title: string;
  accent: 'neb' | 'cyan' | 'purple';
  navLabel: string;
  items: FaqItem[];
};

export const paasFaqGroups: FaqGroup[] = [
  {
    id: 'platform',
    title: 'Platform & Mimari',
    navLabel: 'Platform & Mimari',
    accent: 'neb',
    items: [
      {
        id: 'nebim-guvencesi',
        question: 'Nebim Güvencesi nedir?',
        answer: (
          <>
            <p style={{ marginBottom: 12 }}>
              <span className="nebim-seal-inline">
                <span className="seal-dot-sm"></span>
                Nebim Guvencesi
              </span>{' '}
              Nebim ERA PaaS&apos;ın musterilere verdigi resmi taahhudu ifade eder.
            </p>
            <p style={{ marginBottom: 10 }}>Bu guvence kapsaminda Nebim sunlari taahhut eder:</p>
            <ul>
              <li><strong>Geriye donuk uyumluluk:</strong> PaaS&apos;a eklenen yeni ozellikler ve guncellemeler, mevcut uygulamalarinizi bozmaz.</li>
              <li><strong>Surum devamlılığı:</strong> Aktif olarak kullandiginiz API surumleri, onceden duyurulmadan kaldirilmaz.</li>
              <li><strong>Guvenli gecis:</strong> Bir surumden digerine geciste Nebim teknik destek saglar.</li>
            </ul>
          </>
        ),
      },
      {
        id: 'mach-nedir',
        question: 'MACH mimarisi nedir ve neden onemli?',
        answer: (
          <p>
            <strong>MACH</strong>: <strong>M</strong>icroservices, <strong>A</strong>PI-first, <strong>C</strong>loud-native, <strong>H</strong>eadless. Nebim ERA PaaS bu ilkeleri esas alir; ihtiyaciniz olan servisleri bagimsiz olarak secip olceklendirebilirsiniz.
          </p>
        ),
      },
      {
        id: 'saas-paas-fark',
        question: 'Nebim ERA SaaS ile PaaS arasindaki fark nedir?',
        answer: (
          <>
            <p style={{ marginBottom: 10 }}><strong>SaaS:</strong> Nebim&apos;in gelistirip yonettigi hazir uygulamalar, siz kullanirsiniz.</p>
            <p><strong>PaaS:</strong> Nebim&apos;in kendi SaaS&apos;larini insa ettigi servis setini sizin kullaniminiza acmasidir. Kendi uygulamalarinizi bu temel uzerine insa edersiniz.</p>
          </>
        ),
      },
    ],
  },
  {
    id: 'gelistirici',
    title: 'Gelistirici Deneyimi',
    navLabel: 'Gelistirici',
    accent: 'cyan',
    items: [
      {
        id: 'api-first',
        question: 'API-First gelistirme ne anlama geliyor?',
        answer: (
          <p>
            Her platform yetenegi net ve tutarli bir <strong>REST API sozlesmesiyle</strong> sunulur. Urun, siparis, musteri ve odeme domain&apos;lerine dokumante edilmis API&apos;lar uzerinden eriserek sifirdan gelistirme maliyetlerini minimize edebilirsiniz.
          </p>
        ),
      },
      {
        id: 'sdk-destegi',
        question: 'Hangi programlama dilleri icin SDK destegi var?',
        answer: (
          <p>
            OpenAPI ve AsyncAPI standartlarina dayali dokumantasyon sayesinde <strong>C#, Java, Python</strong> ve daha fazlasi icin API client&apos;larinizi otomatik olusturabilirsiniz.
          </p>
        ),
      },
      {
        id: 'versiyonlama',
        question: 'Versiyonlama ve geriye donuk uyumluluk nasil isliyor?',
        answer: (
          <p>
            Biz PaaS&apos;a yeni ozellikler eklerken mevcut uygulamanizin surekliligini tehlikeye atmadan kendi teknolojik guncellemelerinizi gerceklestirebilirsiniz. <span className="nebim-seal-inline"><span className="seal-dot-sm"></span>Nebim Guvencesi</span> bu taahhudu kapsar.
          </p>
        ),
      },
    ],
  },
  {
    id: 'veri',
    title: 'Veri & Entegrasyon',
    navLabel: 'Veri & Entegrasyon',
    accent: 'neb',
    items: [
      {
        id: 'datasync-nedir',
        question: 'DataSync nedir, nasil calisir?',
        answer: (
          <>
            <p style={{ marginBottom: 10 }}>ERA DataSync, Nebim ERA&apos;da kayit altina alinan veriyi <strong>anlik olarak dis sistemlerinize aktarmanizi</strong> veya harici veri kaynaklarini ERA&apos;ya baglamanizi saglar.</p>
            <p><strong>Webhook</strong> ve <strong>WebSocket</strong> destegiyle calisir; JSON, XML veya Form-encoded formatlarini destekler.</p>
          </>
        ),
      },
      {
        id: 'event-driven',
        question: 'Event-Driven mimarinin avantaji nedir?',
        answer: (
          <p>
            Siparis, stok hareketi, musteri guncellemesi gibi olaylari <strong>batch sureclere gerek kalmadan anlik dinleyebilirsiniz</strong>. Veriye dayali kararlarinizi gecikme olmaksizin eyleme donusturebilirsiniz.
          </p>
        ),
      },
    ],
  },
  {
    id: 'guvenlik',
    title: 'Guvenlik',
    navLabel: 'Guvenlik',
    accent: 'purple',
    items: [
      {
        id: 'rbac-nedir',
        question: 'RBAC (Rol Bazli Erisim Kontrolu) nasil calisir?',
        answer: (
          <p>
            RBAC ile yalnizca yetkili sistemlerin ve is ortaklarinin veriye erismesini saglayabilirsiniz. <strong>API Key</strong> ve <strong>Token</strong> tabanli protokollerle desteklenen cok katmanli guvenlik modeli, hem kullanici hem sistem duzeyinde denetim imkani sunar.
          </p>
        ),
      },
    ],
  },
  {
    id: 'fiyatlandirma',
    title: 'Fiyatlandirma',
    navLabel: 'Fiyatlandirma',
    accent: 'cyan',
    items: [
      {
        id: 'fiyat-modeli',
        question: 'Nebim ERA PaaS&apos;in fiyatlandirma modeli nasil?',
        answer: (
          <p>
            Fiyatlandirma, ihtiyaciniza ozel hazirlanir. Kullanmak istediginiz servisler ve olcek gereksinimlerinize gore belirlenir. Detayli bilgi icin <a href="/paas#cta">Demo Talep Et</a> uzerinden ekibimize ulasabilirsiniz.
          </p>
        ),
      },
    ],
  },
];

export const paasFaqItems = paasFaqGroups.flatMap((group) => group.items);
