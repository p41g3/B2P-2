// reuse <main-head> (make sure to put all the script files and title outside)
class MainHead extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=search"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
            <link rel="stylesheet" href="styles.css">
        `;
    }
}

customElements.define('main-head', MainHead);

// reuse <main-header>
class MainHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <nav>
                    <a href="index.html">
                        <img src="pics/b2p.png" alt="Logo">
                    </a>
                    <div class="nav-spacer"></div>
                    <div class="nav-links">
                        <a href="about-us.html">About Us</a>
                        <a href="#">FAQs</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#customerSupport">Customer Support</a>
                    </div>
                </nav>
            </header>
        `;
    }
}

customElements.define('main-header', MainHeader);

// reuse <search-header> (IN PROGRESS)
class SearchHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <nav>
                    <a href="index.html">
                        <img src="pics/b2p.png" alt="Logo">
                    </a>

                    <!-- Search Bar -->
                    <div class="search-container">
                        <form id="search-form" action="results.html" method="get">
                        <div class="search" style="width: clamp(15rem, -1.072rem + 42.857vw, 37.5rem);">
                            <span class="search-icon material-symbols-outlined">search</span>
                            <input class="search-input" type="search" name="search" placeholder="e.g. Got Clothing, Restaurant Franchise, Packaging, etc.">
                            <ul id="suggestions-list"></ul>
                        </div>
                        </form>
                    </div>

                    <div class="nav-links">
                        <a href="#">About Us</a>
                        <a href="#">FAQs</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#customerSupport">Customer Support</a>
                    </div>
                </nav>
            </header>
        `;
    }
}

customElements.define('search-header', SearchHeader);

// reuse <b2p-footer>
class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-white">
                <div class="container" style="max-width: 80%; margin: 0 auto;">
                    <hr>
                    <div class="mt-4 mb-3 row">
                        <div class="col">
                            <div class="d-flex justify-content-center">
                                <a href="index.html"><img src="pics/b2p.png" class="img-fluid" style="height: 3.5rem;" alt="Logo"></a>
                            </div>
                            <div class="d-flex justify-content-center">
                                <a href="#" class="text-decoration-none text-dark"><i class="bi bi-instagram fs-5 me-3"></i></a>
                                <a href="https://www.facebook.com/profile.php?id=61570464069710" class="text-decoration-none text-dark"><i class="bi bi-facebook fs-5 me-3"></i></a>
                                <a href="https://x.com/B2Pinoy" class="text-decoration-none text-dark"><i class="bi bi-twitter fs-5 me-3"></i></a>
                                <a href="#" class="text-decoration-none text-dark"><i class="bi bi-linkedin fs-5 me-3"></i></a>
                            </div>
                        </div>
                        <div class="col">
                            <h6 class="fw-bold mb-3">Customer Support</h6>
                            <ul class="list-unstyled">
                                <li class="mb-2"><a href="#" class="text-decoration-none text-dark">Contact Us</a></li>
                                <li class="mb-2"><a href="#" class="text-decoration-none text-dark">B2Pinoy Verified</a></li>
                                <li><a href="#" class="text-decoration-none text-dark">Help Center</a></li>
                            </ul>
                        </div>
                        <div class="col">
                            <h6 class="fw-bold mb-3">Careers</h6>
                            <ul class="list-unstyled">
                                <li class="mb-2"><a href="forms.html" class="text-decoration-none text-dark">Be a Supplier!</a></li>
                                <li class="mb-2"><a href="forms.html" class="text-decoration-none text-dark">Promote your Service!</a></li>
                                <li><a href="forms.html" class="text-decoration-none text-dark">List your Franchise!</a></li>
                            </ul>
                        </div>
                        <div class="col">
                            <h6 class="fw-bold mb-3">About B2Pinoy</h6>
                            <ul class="list-unstyled">
                                <li class="mb-2"><a href="#" class="text-decoration-none text-dark">About Us</a></li>
                                <li class="mb-2"><a href="privacy-policy.html" class="text-decoration-none text-dark">Privacy Policy</a></li>
                                <li><a href="terms-of-service.html" class="text-decoration-none text-dark">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="text-center">
                        <p>© 2025 B2Pinoy. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('b2p-footer', Footer);

// reuse <cs-modal> (CS for customer support)
class CSModal extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <!-- Modal -->
            <div class="modal fade" id="customerSupport" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header justify-content-center position-relative">
                            <h1 class="modal-title fw-bold m-auto" id="exampleModalLabel">Questions?</h1>
                            <button type="button" class="btn-close position-absolute end-0 top-50 translate-middle-y me-3" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    <div class="modal-body text-center mt-3">
                        <h2><b>Listing Inquiries</b></h2>
                        <p class="fs-5"><u>sales.b2pinoy@gmail.com</u></p>
                        <h2 class="mt-4"><b>Customer Support</b></h2>
                        <p class="fs-5"><u>cs.b2pinoy@gmail.com</u></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('cs-modal', CSModal);