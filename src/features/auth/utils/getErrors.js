export const getAuthErrorMessage = (code) => {
  switch (code) {
    case "auth/email-already-in-use":
      return "This email is already in use.";
    case "auth/invalid-email":
      return "The email address is not valid.";
    case "auth/weak-password":
      return "The password is too weak. Use at least 6 characters.";
    case "auth/missing-password":
      return "Please enter a password.";
    case "auth/user-not-found":
      return "No account found with this email.";
    case "auth/wrong-password":
      return "Incorrect password. Please try again.";
    case "auth/too-many-requests":
      return "Too many login attempts. Please try again later.";
    case "auth/network-request-failed":
      return "Network error. Please check your internet connection.";
    case "auth/internal-error":
      return "Internal error occurred. Please try again.";
    case "auth/missing-email":
      return "Email field is required.";
    default:
      return "An unexpected error occurred." + code;
  }
};
export const getLoginErrorMessage = (code) => {
  switch (code) {
    case "auth/invalid-credential":
    case "auth/wrong-password":
      return "Invalid email or password.";
    case "auth/user-not-found":
      return "No account found with this email.";
    case "auth/invalid-email":
      return "The email address is not valid.";
    case "auth/missing-password":
      return "Please enter your password.";
    case "auth/missing-email":
      return "Please enter your email.";
    case "auth/too-many-requests":
      return "Too many login attempts. Please try again later.";
    case "auth/network-request-failed":
      return "Network error. Please check your internet connection.";
    case "auth/internal-error":
      return "Internal error occurred. Please try again.";
    default:
      return "An unexpected error occurred during login.";
  }
};
export const getGoogleAuthErrorMessage = (code) => {
  switch (code) {
    case "auth/popup-closed-by-user":
      return "The popup was closed before completing the sign-in.";
    case "auth/cancelled-popup-request":
      return "Another popup is already open. Please try again.";
    case "auth/popup-blocked":
      return "The sign-in popup was blocked by the browser.";
    case "auth/account-exists-with-different-credential":
      return "An account already exists with the same email but different sign-in method.";
    case "auth/operation-not-allowed":
      return "Google sign-in is not enabled for this project.";
    case "auth/unauthorized-domain":
      return "This domain is not authorized to use Google sign-in.";
    case "auth/network-request-failed":
      return "Network error. Please check your internet connection.";
    default:
      return "An unexpected error occurred during Google sign-in.";
  }
};
export const getResetPasswordErrorMessage = (code) => {
  switch (code) {
    case "auth/user-not-found":
      return "No account found with this email.";
    case "auth/invalid-email":
      return "The email address is not valid.";
    case "auth/missing-email":
      return "Please enter your email.";
    case "auth/network-request-failed":
      return "Network error. Please check your internet connection.";
    case "auth/too-many-requests":
      return "Too many attempts. Please try again later.";
    case "auth/internal-error":
      return "An internal error occurred. Please try again.";
    default:
      return "An unexpected error occurred while resetting password.";
  }
};
