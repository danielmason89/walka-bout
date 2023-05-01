<footer>
  <div class="content-wrapper">
    <div class="footer-content">
      <div class="contact">
        <h4>Contact</h4>
        <address>
          <p>
            555-555-5555<br />
            hello@walka-bout.com
          </p>
        </address>
      </div>
      <div class="social">
        <h4>Socials</h4>
        <div class="social-icons">
          <button>
            <a href="https://www.facebook.com/yoursite" target="_blank"
              ><i class="fab fa-facebook-f" /></a
            >
          </button>
          <button>
            <a href="https://www.instagram.com/yoursite" target="_blank"
              ><i class="fab fa-instagram" /></a
            >
          </button>
          <button>
            <a href="https://www.twitter.com/yoursite" target="_blank"
              ><i class="fab fa-twitter" /></a
            >
          </button>
          <!-- other social links here -->
        </div>
      </div>
    </div>
    <!-- footer content ends -->
  </div>
  <!--footer content-wrapper ends-->
  <div class="copyright">
    <div class="footer-divider" />
    <p>CopyRight 2022 | Walka-bout</p>
  </div>
</footer>

<style>
  footer {
    text-align: center;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    bottom: 0;
    width: 100%;
  }

  footer h4 {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }

  footer .content-wrapper {
    width: 75vw;
  }

  .footer-content {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding-bottom: 0.85rem;
  }

  footer .social-icons {
    display: flex;
    justify-content: space-around;

    align-items: center;
  }

  footer .social-icons button {
    background-color: #3b3e57;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    justify-content: center;
    align-items: center;
  }

  footer button {
    margin: 0;
    line-height: 1.285;
  }

  .footer-divider {
    background: #333836;
    width: 10rem;
    text-align: center;
    height: 0.015rem;
    margin: auto;
    margin-bottom: 1rem;
    text-align: center;
  }

  footer .copyright {
    width: 100%;
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 768px) {
    footer .content-wrapper {
      width: 65%;
    }

    .footer-content {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: row;
    }
  }
</style>
