<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>VishIRAFrosy.ai — AI & Crypto Innovators</title>

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
  <!-- Bootstrap Icons -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet" />
  <!-- AOS Animation CSS -->
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

  <style>
    :root {
      --primary-color: #1a73e8;
      --primary-hover: #185abc;
      --accent-color: #1a73e8;
      --background-light: #ffffff;
      --background-dark: #202124;
      --text-dark: #202124;
      --text-light: #e8eaed;
      --section-padding: 80px 0;
      --shadow-light: 0 1px 3px rgb(60 64 67 / 0.3);
      --shadow-dark: 0 1px 3px rgb(255 255 255 / 0.15);
    }

    /* --- Light mode --- */
    body {
      background-color: var(--background-light);
      color: var(--text-dark);
      font-family: 'Roboto', Arial, sans-serif;
      scroll-behavior: smooth;
      transition: background-color 0.3s, color 0.3s;
    }

    /* Navbar */
    .navbar {
      background-color: var(--background-light);
      border-bottom: 1px solid #dadce0;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      box-shadow: var(--shadow-light);
      transition: background-color 0.3s, border-color 0.3s;
    }

    .navbar-brand {
      color: var(--primary-color);
      font-weight: 700;
      font-size: 1.6rem;
      user-select: none;
    }

    .navbar-brand:hover {
      color: var(--primary-hover);
      text-decoration: none;
    }

    .nav-link {
      color: var(--text-dark);
      font-weight: 500;
      transition: color 0.3s ease;
      border-bottom: none !important;
      text-decoration: none !important;
      box-shadow: none !important;
      padding: 0.5rem 0.75rem;
      user-select: none;
    }

    .nav-link:hover,
    .nav-link.active {
      color: var(--primary-color);
      text-decoration: underline;
    }

    /* Hero Section */
    .hero {
      background-color: var(--background-light);
      color: var(--text-dark);
      padding: 140px 15px 100px;
      text-align: center;
    }

    .hero h1 {
      font-weight: 700;
      font-size: 3rem;
      margin-bottom: 1rem;
      user-select: none;
    }

    .hero p {
      font-size: 1.25rem;
      color: #5f6368;
      margin-bottom: 2rem;
    }

    .btn-primary {
      background-color: var(--primary-color);
      border-color: var(--primary-color);
      font-weight: 600;
      padding: 0.625rem 1.5rem;
      font-size: 1.1rem;
      border-radius: 4px;
      transition: background-color 0.3s ease;
      user-select: none;
    }

    .btn-primary:hover {
      background-color: var(--primary-hover);
      border-color: var(--primary-hover);
    }

    /* General Sections */
    section {
      padding: var(--section-padding);
      margin-bottom: 40px;
      border-radius: 6px;
      background-color: var(--background-light);
      box-shadow: var(--shadow-light);
      transition: background-color 0.3s, box-shadow 0.3s;
    }

    /* Section Titles */
    .section-title {
      color: var(--primary-color);
      font-weight: 700;
      margin-bottom: 40px;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      font-size: 1.8rem;
      text-align: center;
      user-select: none;
    }

    /* Cards */
    .feature-card,
    .usecase-card,
    .team-card {
      background-color: #f8f9fa;
      border-radius: 12px;
      padding: 1.8rem;
      box-shadow: 0 1px 2px rgb(60 64 67 / 0.15);
      color: var(--text-dark);
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      text-align: center;
      transition: box-shadow 0.3s ease, background-color 0.3s ease;
      user-select: none;
    }

    .feature-card:hover,
    .usecase-card:hover,
    .team-card:hover {
      box-shadow: 0 8px 20px rgb(26 115 232 / 0.3);
    }

    .feature-card h5,
    .usecase-card h5,
    .team-card h5 {
      margin-bottom: 1rem;
      font-weight: 600;
      color: var(--primary-color);
    }

    .feature-card p,
    .usecase-card p,
    .team-card p {
      font-size: 1rem;
      color: #3c4043;
    }

    /* Team Member Image */
    .team-photo {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 1rem;
      box-shadow: 0 4px 8px rgb(26 115 232 / 0.25);
    }

    /* Team Member Role */
    .team-role {
      color: #5f6368;
      font-weight: 500;
      font-size: 1rem;
      margin-top: 0.25rem;
      margin-bottom: 0;
    }

    /* Responsive */
    @media (max-width: 767px) {
      section {
        padding: 40px 15px;
      }

      .hero {
        padding: 80px 15px 60px;
      }
    }

    /* Dark Mode Styles */
    body.dark-mode {
      background-color: var(--background-dark);
      color: var(--text-light);
    }

    body.dark-mode .navbar {
      background-color: var(--background-dark);
      border-color: #5f6368;
      box-shadow: var(--shadow-dark);
    }

    body.dark-mode .navbar-brand {
      color: var(--primary-color);
    }

    body.dark-mode .navbar-brand:hover {
      color: var(--primary-hover);
    }

    body.dark-mode .nav-link {
      color: var(--text-light);
    }

    body.dark-mode .nav-link:hover,
    body.dark-mode .nav-link.active {
      color: var(--primary-color);
      text-decoration: underline;
    }

    body.dark-mode .hero {
      background-color: var(--background-dark);
      color: var(--text-light);
    }

    body.dark-mode section {
      background-color: #2c2c2c;
      box-shadow: var(--shadow-dark);
    }

    body.dark-mode .feature-card,
    body.dark-mode .usecase-card,
    body.dark-mode .team-card {
      background-color: #3a3a3a;
      color: var(--text-light);
      box-shadow: 0 1px 3px rgb(255 255 255 / 0.1);
    }

    body.dark-mode .feature-card:hover,
    body.dark-mode .usecase-card:hover,
    body.dark-mode .team-card:hover {
      box-shadow: 0 8px 20px rgb(26 115 232 / 0.7);
    }

    body.dark-mode .feature-card p,
    body.dark-mode .usecase-card p,
    body.dark-mode .team-card p {
      color: #d0d0d0;
    }

    body.dark-mode .form-control {
      background-color: #3a3a3a;
      color: var(--text-light);
      border-color: #555;
    }

    body.dark-mode .form-control:focus {
      background-color: #3a3a3a;
      color: var(--text-light);
      border-color: var(--primary-color);
      box-shadow: 0 0 0 0.2rem rgb(26 115 232 / 0.5);
    }

    body.dark-mode .btn-primary {
      background-color: var(--primary-color);
      border-color: var(--primary-color);
      color: #fff;
    }


.navbar-toggler {
  border: none !important;
  background-color: transparent !important;
  outline: none !important;
  box-shadow: none !important;
}


    /* Customize toggler icon */
    .navbar-toggler-icon {
      filter: invert(20%);
      transition: filter 0.3s;
    }

    .navbar-toggler.collapsed .navbar-toggler-icon {
      filter: invert(40%);
    }

    /* Dark mode toggle button styling */
    #darkModeToggle {
      border: none;
      background: none;
      cursor: pointer;
      color: var(--primary-color);
      font-size: 1.4rem;
      user-select: none;
      transition: color 0.3s ease;
    }

    #darkModeToggle:hover {
      color: var(--primary-hover);
    }

    /* Smooth scroll offset fix for fixed navbar */
    :target::before {
      content: "";
      display: block;
      height: 70px; /* navbar height */
      margin-top: -70px;
      visibility: hidden;
    }
  </style>
</head>

<body>

  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg fixed-top shadow-sm">
    <div class="container-fluid px-4">
      <a class="navbar-brand fw-bold fs-3 me-auto" href="#">VishIRAFrosy.ai</a>
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav mb-2 mb-lg-0 align-items-center">
          <li class="nav-item"><a class="nav-link" href="#features">Features</a></li>
          <li class="nav-item"><a class="nav-link" href="#whychooseus">Why Us</a></li>
          <li class="nav-item"><a class="nav-link" href="#usecases">Use Cases</a></li>
          <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
          <li class="nav-item"><a class="nav-link" href="https://www.linkedin.com/company/vishirafrosy-ai/?viewAsMember=true">Apply</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <h1 class="display-4 fw-bold mb-4" data-aos="fade-up">Empowering Tomorrow With AI & Blockchain</h1>
      <p class="lead mb-5" data-aos="fade-up" data-aos-delay="100">
        Transforming digital economies through intelligent, decentralized innovation.
      </p>
      <a href="#features" class="btn btn-primary btn-lg" data-aos="zoom-in">Explore Technology</a>
    </div>
  </section>

  <!-- Features Section -->
  <section id="features">
    <div class="container">
      <h2 class="section-title" data-aos="fade-down">Core Features</h2>
      <div class="row g-4">
        <div class="col-md-3" data-aos="fade-up">
          <div class="feature-card">
            <h5>Smart Contracts</h5>
            <p>Secure and automatic blockchain agreements for transparency and efficiency.</p>
          </div>
        </div>
        <div class="col-md-3" data-aos="fade-up" data-aos-delay="100">
          <div class="feature-card">
            <h5>AI-Powered Analytics</h5>
            <p>Advanced insights using machine learning for predictive decision-making.</p>
          </div>
        </div>
        <div class="col-md-3" data-aos="fade-up" data-aos-delay="200">
          <div class="feature-card">
            <h5>Decentralized Apps</h5>
            <p>Trustless applications ensuring data integrity and user control.</p>
          </div>
        </div>
        <div class="col-md-3" data-aos="fade-up" data-aos-delay="300">
          <div class="feature-card">
            <h5>Secure Wallets</h5>
            <p>Multi-layered security for managing digital assets with ease.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="bg-light">
    <div class="container">
      <h2 class="section-title" data-aos="fade-down">About VishIRAFrosy.ai</h2>
      <p data-aos="fade-up" class="fs-5">
        VishIRAFrosy.ai is a leading AI and crypto tech company focused on revolutionizing how decentralized
        applications empower individuals and businesses worldwide.
        Our mission is to blend cutting-edge AI capabilities with blockchain's security to create innovative,
        accessible solutions that shape the future of finance, data privacy, and digital interaction.
      </p>
    </div>
  </section>

  <!-- Why Choose Us Section -->
  <section id="whychooseus">
    <div class="container">
      <h2 class="section-title" data-aos="fade-down">Why Choose Us</h2>
      <div class="row g-4 text-center">
        <div class="col-md-4" data-aos="fade-up">
          <div class="usecase-card p-4 rounded shadow-sm">
            <h5>Expert Team</h5>
            <p>Highly skilled professionals with deep expertise in AI and blockchain technologies.</p>
          </div>
        </div>
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
          <div class="usecase-card p-4 rounded shadow-sm">
            <h5>Innovative Solutions</h5>
            <p>Unique, scalable technology products that meet real-world challenges effectively.</p>
          </div>
        </div>
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
          <div class="usecase-card p-4 rounded shadow-sm">
            <h5>Customer Centric</h5>
            <p>Prioritizing user experience and customer success with continuous support.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Use Cases Section -->
  <section id="usecases" class="bg-light">
    <div class="container">
      <h2 class="section-title" data-aos="fade-down">Use Cases</h2>
      <div class="row g-4">
        <div class="col-md-4" data-aos="fade-up">
          <div class="usecase-card p-4 rounded shadow-sm">
            <h5>Supply Chain Transparency</h5>
            <p>Tracking goods on blockchain with AI-based demand forecasting for efficiency.</p>
          </div>
        </div>
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
          <div class="usecase-card p-4 rounded shadow-sm">
            <h5>Decentralized Finance (DeFi)</h5>
            <p>Smart contracts enabling loans, savings, and asset trading without intermediaries.</p>
          </div>
        </div>
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
          <div class="usecase-card p-4 rounded shadow-sm">
            <h5>AI-Driven Identity Verification</h5>
            <p>Secure, privacy-preserving KYC powered by AI and blockchain integration.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact">
    <div class="container">
      <h2 class="section-title" data-aos="fade-down">Contact Us</h2>
      <form class="mx-auto" style="max-width: 600px;" data-aos="fade-up">
        <div class="mb-3">
          <label for="nameInput" class="form-label">Name</label>
          <input type="text" class="form-control" id="nameInput" placeholder="Your full name" required />
        </div>
        <div class="mb-3">
          <label for="emailInput" class="form-label">Email address</label>
          <input type="email" class="form-control" id="emailInput" placeholder="name@example.com" required />
        </div>
        <div class="mb-3">
          <label for="messageInput" class="form-label">Message</label>
          <textarea class="form-control" id="messageInput" rows="4" placeholder="Your message here..." required></textarea>
        </div>
        <button type="submit" class="btn btn-primary w-100">Send Message</button>
      </form>
      <div class="mt-4 text-center" data-aos="fade-up" data-aos-delay="200">
        <a href="https://www.linkedin.com/company/vishirafrosy-ai/?viewAsMember=true" target="_blank" rel="noopener noreferrer" class="me-3">
          <i class="bi bi-linkedin fs-3" style="color: #0a66c2;"></i>
        </a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe7tBjJQjxlD1AcBiJQiLj8TXVLmKi26JMgUPGD5GVD1a1D7g/viewform?usp=header" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-file-earmark-text fs-3" style="color: #1967d2;"></i>
        </a>
      </div>
    </div>
  </section>

  <!-- Bootstrap JS Bundle -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <!-- AOS Animation JS -->
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

  <script>
    // Initialize AOS animations
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });

    // Dark mode toggle logic
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeIcon = darkModeToggle.querySelector('i');
    const body = document.body;

    // Load saved preference
    if (localStorage.getItem('darkMode') === 'enabled') {
      body.classList.add('dark-mode');
      darkModeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
    }

    darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
      } else {
        localStorage.setItem('darkMode', 'disabled');
        darkModeIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
      }
    });

    // Smooth active link on scroll
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = [...navLinks].map(link => document.querySelector(link.getAttribute('href')));

    window.addEventListener('scroll', () => {
      let scrollPos = window.scrollY + 80; // Offset for fixed navbar
      sections.forEach((section, i) => {
        if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
          navLinks[i].classList.add('active');
        }
      });
    });
  </script>

</body>

</html>
