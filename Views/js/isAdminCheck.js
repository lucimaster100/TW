class AdminCheck {
  constructor() {
    const admin = localStorage.getItem("admin");
    this.validateAuth(admin);
  }
  validateAuth(admin) {
    if (admin != 1) {
      window.location.replace("/home.html");
    } else {
    }
  }
}
