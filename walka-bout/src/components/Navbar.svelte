<header>
  <div class="content-wrapper">
    <figure>
      <a href="/">
        <img src="/img/logo_transparent.png" alt="walka-bout logo" />
      </a>
    </figure>
    <div class="header-divider" />
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">FAQ</a></li>
        <li><a href="/">About</a></li>
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
    padding-bottom: 1rem;
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
</style>
