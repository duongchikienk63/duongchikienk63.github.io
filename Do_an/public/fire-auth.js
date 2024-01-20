const mailContainer = document.querySelector(".mail-container");
const shownMailContainer = "container mail-container shown-container";
const hiddenMailContainer = "container mail-container hidden-container";
const socialMediaContainer = document.querySelector(".socialMedia-container");
const shownSocialMediaContainer =
  "container socialMedia-container shown-container";
const hiddenSocialMediaContainer =
  "container socialMedia-container hidden-container";
const phoneContainer = document.querySelector(".phone-container");
const shownPhoneContainer = "container phone-container shown-container";
const hiddenPhoneContainer = "container phone-container hidden-container";
const authenticationMethod1 = document.getElementById("method1");
const authenticationMethod2 = document.getElementById("method2");
const authenticationMethod3 = document.getElementById("method3");
const mailField = document.getElementById("mail");
const passwordField = document.getElementById("password");
const phoneNumberField = document.getElementById("phoneNumber");
const codeField = document.getElementById("code");
const labels = document.getElementsByTagName("label");
const signInWithMail = document.getElementById("signInWithMail");
const signInWithPhoneButton = document.getElementById("signInWithPhone");
const getCodeButton = document.getElementById("getCode");
const signUp = document.getElementById("signUp");
const failureModal = document.querySelector(".failure");
const signInWithGoogleButton = document.getElementById("signInWithGoogle");
const signInWithTwitterButton = document.getElementById("signInWithTwitter");
const signInWithFacebookButton = document.getElementById("signInWithFacebook");

const auth = firebase.auth();

  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    "recaptcha-container"
  );

  recaptchaVerifier.render().then((widgetId) => {
    window.recaptchaWidgetId = widgetId;
  });

  const sendVerificationCode = () => {
    const phoneNumber = phoneNumberField.value;
    const appVerifier = window.recaptchaVerifier;

    auth
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        const sentCodeId = confirmationResult.verificationId;
        signInWithPhoneButton.addEventListener("click", () =>
          signInWithPhone(sentCodeId)
        );
      });
  };

  const signInWithPhone = (sentCodeId) => {
    const code = codeField.value;
    const credential = firebase.auth.PhoneAuthProvider.credential(
      sentCodeId,
      code
    );
    auth
      .signInWithCredential(credential)
      .then(() => {
        userActive.classList.add("display-none");
        fixRemove.innerHTML = `          <button>
        <i class="fa-solid fa-phone"></i>
        0705155283
      </button>
      
      <span id="righteous"> </span>
      
      <button>
      Hi, Dương Chí Kiên
      </button>`;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  getCodeButton.addEventListener("click", sendVerificationCode);