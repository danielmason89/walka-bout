<script>
  let hoverColor = "#333836";
</script>

<header>
  <div class="content-wrapper">
    <figure>
      <a href="/" title="Home">
        <img src="/img/logo_transparent.png" alt="walka-bout logo" />
      </a>
    </figure>
    <div class="header-divider" />
    <nav>
      <ul>
        <li><a href="/" title="Home">Home</a></li>
        <li><a href="/" title="FAQ">Faq</a></li>
        <li><a href="/" title="About">About</a></li>
      </ul>
    </nav>
  </div>
</header>

<style>
  /*  Header styles */
  header figure {
    max-width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
  }

  ul a:hover {
    color: #333836;
  }

  @media screen and (max-width: 720px) {
    header .content-wrapper {
      flex-flow: row wrap;
    }
    .header-divider {
      background: #333836;
      width: 100%;
      height: 0.015rem;
      margin: 1rem 0 1.25rem 0;
    }

    a {
      text-align: center;
    }
  }

  header {
    position: fixed;
    width: 100%;
  }

  header .content-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }

  header nav {
    font-size: 1.125em;
    font-weight: 700;
    display: flex;
    text-transform: uppercase;
    justify-content: space-around;
    align-items: center;
    flex-flow: row wrap;
    width: 60%;
  }

  header nav ul {
    display: flex;
    justify-content: space-around;
    width: 100%;
    list-style: none;
    margin-bottom: 1rem;
  }

  header nav ul li {
    font-size: 1.125em;
  }

  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
  }

  @media only screen and (min-width: 1200px) {
    /*Desktop styles here */

    header {
      padding: 15px 0;
    }

    .content-wrapper {
      max-width: 90vw;
    }

    a {
      display: flex;
      align-items: flex-start;
      padding: 0 1rem;
    }
  }
</style>
