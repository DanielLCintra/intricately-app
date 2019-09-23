<template>
  <section class="dashboard">

    <div class="info-company">
      <div class="logo-company">
        <img src="src/assets/Company Page/squares.png">
      </div>

      <div>
        <h1>Microsoft</h1>

        <div class="location">
          <img src="src/assets/Company Page/location.png">
          Redmond, WA USA
        </div>
      </div>

    </div>

    <div class="desc-company">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae vehicula ipsum. Sed dapibus, lorem nec molestie aliquam, arcu ex efficitur magna, quis tempus leo neque nec erat.
    </div>

    <div class="container">
      <div class="col">
        <div class="box">
          <div class="title-box">Activities</div>
          <ul>
            <li
              v-for="(item, key) in activities"
              :key="key"
            >
              <div class="content-box">
                <div class="content-box__item">
                  {{ item.time }}
                </div>
                <div class="content-box__item">
                  <img :src="item.image">
                </div>
                <div class="content-box__item">
                  <p>{{ item.text1 }}</p>
                  <p v-if="item.company && item.text2"><del>{{ item.company }}</del> {{ item.text2 }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="col">
        <div class="box">
          <div class="title-box">Similar Companies</div>
          <ul>
            <li
              v-for="(item, key) in similarCompanies"
              :key="key"
            >
              <div class="content-box">
                <div class="content-box__logo">
                  <img :src="item.logo">
                </div>

                <div class="content-box__title">
                  {{ item.title }}
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="box">
          <div class="title-box">Company Spend History</div>
          <div class="graph-box">
            <img src="src/assets/company-spend-history-graph.png">
          </div>
        </div>

        <div class="box">
          <div class="title-box">Company Spend History</div>
          <ul>
            <li
              v-for="(item, key) in companySpendHistory"
              :key="key"
            >
              <div class="content-box">
                <div class="content-box__logo">
                  <img :src="item.logo">
                </div>

                <div class="content-box__title">
                  <p>{{ item.title }}</p>
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "CompanyPageIndex",

  data: () => ({
    activities: [
      {
        time: "8 days ago",
        image: "src/assets/Company Page/video-platform.png",
        company: "Microsoft",
        text1: "Cloud Ochestration replaced",
        text2: "on 1 property"
      },
      {
        time: "10 days ago",
        image: "src/assets/Company Page/content-delivery.png",
        company: "Microsoft",
        text1: "Express Scripts replaced",
        text2: "on 1 property"
      },
      {
        time: "12 days ago",
        image: "src/assets/Company Page/waf-d-dos-security.png",
        company: "Microsoft",
        text1: "Kaiser Permanent replaced",
        text2: "on 1 property"
      },
      {
        time: "14 days ago",
        image: "src/assets/Company Page/traffic-management.png",
        company: "Microsoft",
        text1: "Molina Healthcare replaced",
        text2: "on 1 property"
      },
      {
        time: "15 days ago",
        image: "src/assets/Company Page/dns.png",
        company: "Microsoft",
        text1: "Express Scripts replaced",
        text2: "on 1 property"
      },
      {
        time: "16 days ago",
        image: "src/assets/Company Page/performance-monitoring.png",
        company: "Microsoft",
        text1: "Kaiser Permanent replaced",
        text2: "on 1 property"
      },
      {
        time: "17 days ago",
        image: "src/assets/Company Page/saas.png",
        company: "Microsoft",
        text1: "Molina Healthcare replaced",
        text2: "on 1 property"
      },
      {
        time: "18 days ago",
        image: "src/assets/Company Page/content-delivery.png",
        company: "",
        text1: "Microsoft launched M-Cloud",
        text2: ""
      }
    ],
    similarCompanies: [
      {
        logo: "src/assets/Company Page/logo.png",
        title: "Amazon Web Services (AWS)"
      },
      {
        logo: "src/assets/Company Page/logo-copy.png",
        title: "Oracle Corporation"
      }
    ],
    companySpendHistory: [
      {
        logo: "src/assets/Company Page/logo-copy-3.png",
        title: "Google Cloud Platform",
        description: "Microsoft spend on products $500.000"
      },
      {
        logo: "src/assets/Company Page/logo-copy-2.png",
        title: "CenturyLink CDN",
        description: "Microsoft spend on products $300.000"
      }
    ]
  })
};
</script>

<style lang="scss">
.logo-company {
  img {
    margin: 0.7em;
  }
}
</style>
