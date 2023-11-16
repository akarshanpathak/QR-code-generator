
      const btn = document.getElementById("btn");
      btn.addEventListener("click", () => {
        const input = document.getElementById("input");
        const inputVal = input.value.trim();
        console.log(inputVal);

        const headingInput = document.querySelector(".headingInput");
        const errorPara = headingInput.querySelector(".error-message");

        if (errorPara) {
          errorPara.remove();
        }

        if (inputVal === "") {
          const para = document.createElement("p");
          para.className = "error-message";
          para.innerHTML = "Enter some text first";
          para.style.color = "red";
          headingInput.appendChild(para);
        } else {
          const imgSrc = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputVal}`;
          const img = document.getElementById("img");
          img.src = imgSrc;
        }

        // Clear input field
        input.value = "";
      });
  