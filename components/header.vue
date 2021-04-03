<template>
  <div>
    <client-only>
      <header>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="/"
                  ><img src="~/assets/images/logo.png"
                /></a>

                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>

                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item" data-page="home">
                      <a class="nav-link" href="index.php">HOME</a>
                    </li>
                    <li class="nav-item" data-page="jobs">
                      <a class="nav-link" href="jobs-exe.php">JOBS</a>
                    </li>
                    <li class="nav-item" data-page="agenda">
                      <a class="nav-link" href="agenda.php">AGENDA</a>
                    </li>
                    <li class="nav-item" data-page="faq">
                      <a class="nav-link" href="index.php#faq">FAQ</a>
                    </li>
                    <li class="nav-item" data-page="contact">
                      <a class="nav-link" href="#">CONTACT</a>
                    </li>
                  </ul>

                  <ul class="navbar-nav language my-2 my-lg-0">
                    <li class="nav-item active">
                      <a class="nav-link" href="#">EN</a>
                    </li>
                    <span style="margin: 5px 0">/</span>
                    <li class="nav-item">
                      <a class="nav-link" href="#">TH</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </client-only>
  </div>
</template>