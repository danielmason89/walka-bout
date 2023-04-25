<script>
  import Form from "./Form.svelte";
  const submittedForm = (e) => {
    console.log(e.detail);
  };
</script>

<main>
  <section class="hero-area">
    <div class="content-wrapper">
      <h1>Retreat from the desk and return refreshed.</h1>
    </div>
  </section>
  <aside>
    <div class="content-wrapper">
      <div class="form-description">
        <h3>Want to join the next retreat?</h3>
        <p>
          Find out when we are holding our next retreat and how your company or
          team can sign up!
        </p>
      </div>
      <div class="form">
        <h3>Find out more</h3>
        <Form on:submitForm={submittedForm} />
      </div>
    </div>
  </aside>
  <section class="features">
    <div class="content-wrapper">
      <h2>Have the work week you always dreamed of — without the bad wifi.</h2>
      <div class="features-items">
        <article>
          <p class="fontawesome-icon">
            <i class="fas fa-campground fa-lg" />
          </p>
          <p class="features-item-description">
            Located in a peaceful bungalow outside of Lake Geneva, Wisconsin.
          </p>
        </article>
        <article>
          <p class="fontawesome-icon">
            <i class="fas fa-bed fa-lg" />
          </p>
          <p class="features-item-description">
            12 private rooms with ensuite bathrooms, 2 group meeting rooms, and
            4 breakout rooms.
          </p>
        </article>
        <article>
          <p class="fontawesome-icon">
            <i class="fas fa-utensils fa-lg" />
          </p>
          <p class="features-item-description">
            Private chef team providing on demand meals - just like your team
            kitchen.
          </p>
        </article>
        <article>
          <p class="fontawesome-icon">
            <i class="fas fa-shoe-prints fa-lg" />
          </p>
          <p class="features-item-description">
            5 outdoor obstacle courses, including private beach ½ mile from
            bungalow.
          </p>
        </article>
        <article>
          <p class="fontawesome-icon">
            <i class="fas fa-smile fa-lg" />
          </p>
          <p class="features-item-description">
            Retreat facilitator to manage your day to day activities so you all
            get a chance to reset.
          </p>
        </article>
        <article>
          <p class="fontawesome-icon">
            <i class="fas fa-wifi fa-lg" />
          </p>
          <p class="features-item-description">
            Dedicated computer room for times that you must wifi.
          </p>
        </article>
      </div>
    </div>
  </section>
  <section class="reviews">
    <div class="content-wrapper">
      <h2>Be a better team in 5 days, like this one.</h2>
      <article>
        <figure>
          <img
            src="./img/omar-lopez-296944-unsplash.jpg"
            alt="Group of happy people outdoors on a walka-bout"
          />
        </figure>
        <div>
          <h3>LaCrue Bottling Co. October 2018</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </article>
    </div>
  </section>
</main>

<style lang="scss">
  .hero-area {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    background: url("../img/jake-melara-30679-unsplash.jpg") center no-repeat
      #333;
    background-size: cover;
    min-height: 500px;
    padding-bottom: 15rem;
  }

  .hero-area h1 {
    font-size: 2.25em;
    font-family: "Raleway", Helvetica, Arial, sans-serif;
    font-weight: 500;
    line-height: 1.2;
    padding-bottom: 10rem;
    text-align: left;
  }

  .features {
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("../img/rawpixel-800820-unsplash1.jpg") center;
    background-size: cover;
    flex-flow: row wrap;
  }

  .features i {
    font-size: 3.75em;
    margin-bottom: 40px;
  }

  .features h2 {
    margin-bottom: 60px;
  }

  .features article {
    width: 63%;
    margin: 30px 0;
  }
  .features .features-items {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
  }

  .features p {
    text-align: center;
    margin: 0;
  }

  aside {
    background-color: #527158;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
  }

  .reviews {
    background-color: #2a423a;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
  }

  .reviews h2 {
    margin-bottom: 40px;
    line-height: 1;
  }

  .reviews h3 {
    width: 55%;
    margin: 20px 0;
  }

  /* ==========================================================================
   Media Queries for Responsive Design.
   These examples override the primary ('mobile first') styles.
   Modify as content requires.
   ========================================================================== */

  /* Hero Area */

  .hero-area {
    min-height: 600px;
  }

  .hero-area h1 {
    font-size: 3em;
    line-height: 1;
    margin: 0;
  }

  /* Aside */
  aside .content-wrapper {
    margin: 50px 0;
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
  }

  aside .content-wrapper .form-description,
  aside .content-wrapper .form {
    width: 40%;
    margin: 0;
  }

  /* Features */

  .features h2 {
    margin-bottom: 20px;
  }

  .features article {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    flex-basis: 50%;
  }

  .features .features-item-description {
    width: 62%;
  }

  .features i {
    margin-bottom: 30px;
  }

  /* Reviews */

  .reviews {
    background-color: #2a423a;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
  }

  .reviews article {
    display: flex;
    justify-content: space-between;
  }

  .reviews h2 {
    width: 85%;
  }

  .reviews article figure,
  .reviews article div {
    width: 49%;
  }

  .reviews h3 {
    width: 75%;
    margin: 0;
  }

  img {
    width: 95%;
    height: auto;
    object-fit: cover;
  }

  @media only screen and (min-width: 1200px) {
    /*Desktop styles here */

    header {
      padding: 15px 0;
    }

    .content-wrapper {
      max-width: 960px;
    }

    h1 {
      font-size: 3.75em;
    }

    h2 {
      font-size: 2.25em;
    }

    h3,
    h4 {
      font-size: 1.875em;
    }

    a {
      display: flex;
      align-items: flex-start;
      padding: 0 1rem;
    }

    p {
      line-height: 1.333;
    }

    /* Aside */
    aside .content-wrapper {
      justify-content: space-around;
    }

    /* Hero */
    .hero-area h1 {
      font-size: 3.75em;
      width: 80%;
    }

    aside .content-wrapper .form-description,
    aside .content-wrapper .form {
      width: 45%;
    }

    .form-description p {
      font-size: 1.125em;
    }

    /* Features */
    .features h2 {
      width: 90%;
    }

    .features article {
      flex-basis: 33%;
    }

    /* Reviews */
    .reviews h2 {
      padding-bottom: 50px;
    }

    .reviews article div {
      width: 42%;
    }

    footer h4 {
      font-size: 1.875em;
    }
  }

  .content-wrapper {
    width: 90%;
    margin: 50px 0;
  }

  @media only screen and (max-width: 760px) {
    aside {
      width: 100%;
      margin: 0;
    }
    .reviews article {
      display: flex;
      justify-content: space-between;
    }
    aside .content-wrapper {
      margin: 50px 0;
      display: block;
    }

    .reviews article {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column wrap;
    }

    aside .content-wrapper .form-description,
    aside .content-wrapper .form {
      width: 95%;
    }

    .reviews article figure,
    .reviews article div {
      padding-top: 1rem;
      padding-bottom: 1rem;
      width: 100%;
    }
  }
</style>
