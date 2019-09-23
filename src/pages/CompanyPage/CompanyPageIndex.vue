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
            <li>
              <div class="content-box">
                <div>
                  8 days ago
                </div>
                <div>
                  Icon
                </div>
                <div>
                  Description
                </div>
              </div>
            </li>
            <li>
              <div class="content-box">
                <div>
                  8 days ago
                </div>
                <div>
                  Icon
                </div>
                <div>
                  Description
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="col">

        <div class="box">
          <div class="title-box">Similar Company</div>
          <ul>
            <li>
              <div class="content-box">

                <div>
                  Logo
                </div>
                <div>
                  Description
                </div>
              </div>
            </li>
            <li>
              <div class="content-box">

                <div>
                  Logo
                </div>
                <div>
                  Description
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="box">
          <div class="title-box">Activities</div>
          <ul>
            <li>
              <div class="content-box">
                <div>
                  8 days ago
                </div>
                <div>
                  Icon
                </div>
                <div>
                  Description
                </div>
              </div>
            </li>
            <li>
              <div class="content-box">
                <div>
                  8 days ago
                </div>
                <div>
                  Icon
                </div>
                <div>
                  Description
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
  name: "CompanyPageIndex"
};
</script>

<style lang="scss">
.logo-company {
  img {
    margin: 0.7em;
  }
}
</style>
