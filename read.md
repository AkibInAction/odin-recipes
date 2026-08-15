* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 1. Main Parent Container (इमेज और फॉर्म दोनों का मेन बॉक्स) */
.mainh {
  position: relative; /* Lock container for absolute child */
  width: 100%;
  height: 100vh;      /* Poori screen cover karne ke liye */
  overflow: hidden;
}

/* 2. Background Image (इमेज को पूरे बैकग्राउंड में फैलाने के लिए) */
.bckimage {
  width: 100%;
  height: 100vh;
  object-fit: cover;  /* Stretch/crop hone se bachane ke liye */
  display: block;
}

/* 3. Form Overlay (इमेज के ऊपर exact center में लाने के लिए) */
.login-form {
  position: absolute; /* Image ke upar overlay ke liye */
  top: 50%;           /* Top se 50% niche */
  left: 50%;          /* Left se 50% aage */
  transform: translate(-50%, -50%); /* Exact dead center karne ke liye */
  
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;      /* 100px padding bohot bada box bana raha tha */
  background-color: rgba(0, 0, 0, 0.6); /* Translucent dark background */
  border: 1px solid #ffffff44;
  border-radius: 8px;
  z-index: 10;
}

input {
  padding: 12px 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
}