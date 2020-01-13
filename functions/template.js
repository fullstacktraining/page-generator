module.exports = data => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>${data.name}'s Page</title>

    <link href="/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css">

    <link href="/css/freelancer.min.css" rel="stylesheet">
  </head>

  <body id="page-top">
    <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="/">Page Generator</a>
        <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/">Home</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/about">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <header class="masthead bg-primary text-white text-center">
      <div class="container d-flex align-items-center flex-column">
      <img class="masthead-avatar mb-5" src="https://res.cloudinary.com/tamas-demo/image/upload/f_auto,q_auto,w_250,h_250,c_thumb,g_face,r_max/${data.photo}" alt="${data.name}">
      <h1 class="masthead-heading text-uppercase mb-0">${data.name}</h1>
      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon">
          <i class="fas fa-star"></i>
        </div>
        <div class="divider-custom-line"></div>
      </div>
      <p class="masthead-subheading font-weight-light mb-0">${data.role}</p>
      <p class="masthead-subheading mb-0"><a class="text-dark" href="mailto:${data.email}">${data.email}</a></p>
    </div>
  </header>
    

  <section class="page-section bg-primary text-white mb-0" id="about">
  </section>
    
  <footer class="footer text-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 mb-5 mb-lg-0">
          <h4 class="text-uppercase mb-4">Around the Web</h4>
          <a class="btn btn-outline-light btn-social mx-1" href="https://facebook.com/${data.facebook}">
            <i class="fab fa-fw fa-facebook-f"></i>
          </a>
          <a class="btn btn-outline-light btn-social mx-1" href="https://twitter.com/${data.twitter}">
            <i class="fab fa-fw fa-twitter"></i>
          </a>
          <a class="btn btn-outline-light btn-social mx-1" href="https://linkedin.com/in/${data.linkedin}">
            <i class="fab fa-fw fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>

  <section class="copyright py-4 text-center text-white">
    <div class="container">
      <small>Copyright &copy; ${data.name} 2019</small>
    </div>
  </section>

  <script src="/vendor/jquery/jquery.min.js"></script>
  <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

</body>
</html>
`