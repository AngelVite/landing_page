(function () {
    var params = new URL(document.currentScript.src).searchParams;
    document.addEventListener("DOMContentLoaded", function () {

        var floatingButton = document.createElement("div");
        floatingButton.id = "floating-button";
        floatingButton.style.position = "fixed";
        floatingButton.style.bottom = "20px";
        floatingButton.style.right = "20px";
        floatingButton.style.backgroundColor = "#4cc247";
        floatingButton.style.borderRadius = "50%";
        floatingButton.style.width = "60px";
        floatingButton.style.height = "60px";
        floatingButton.style.boxShadow =
            "0px 2px 5px rgba(0, 0, 0, 0.2)";
        floatingButton.style.backgroundImage =
            "url('https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c543.png')";
        floatingButton.style.backgroundSize = "50%";
        floatingButton.style.backgroundPosition = "center";
        floatingButton.style.backgroundRepeat = "no-repeat";
        document.body.appendChild(floatingButton);

        floatingButton.addEventListener("click", function () {
            let whatsappContainer =
                document.querySelector("#w-container");
            if (whatsappContainer.style.display === "block")
                whatsappContainer.style.display = "none";
            else whatsappContainer.style.display = "block";
        });



        var wContainer = document.createElement("div");
        wContainer.id = "w-container";
        wContainer.style.display = "none";
        wContainer.style.width = "350px";
        wContainer.style.backgroundColor = "#ffffff";
        wContainer.style.position = "fixed";
        wContainer.style.bottom = "40px";
        wContainer.style.right = "90px";
        wContainer.style.zIndex = "100";
        wContainer.style.borderRadius = "12px";

        var wHeader = document.createElement("div");
        wHeader.id = "w-header";
        wHeader.style.width = "100%";
        wHeader.style.height = "80px";
        wHeader.style.backgroundColor = "#fac10b";
        wHeader.style.padding = "10px";
        wHeader.style.borderTopLeftRadius = "12px";
        wHeader.style.borderTopRightRadius = "12px";

        var wHeaderText = document.createElement("p");
        wHeaderText.id = "w-header-text";
        wHeaderText.style.color = "#000000";
        wHeaderText.style.fontFamily = "sans-serif"
        wHeaderText.style.fontSize = "15px";
        wHeaderText.style.padding = "10px 5px";
        wHeaderText.style.fontWeight = "lighter";
        wHeaderText.textContent = "¡Hola! Complete los campos a continuación para iniciar la conversación en WhatsApp";
        wHeader.appendChild(wHeaderText);
        wContainer.appendChild(wHeader);

        var wForm = document.createElement("form");
        wForm.id = "w-form";
        wForm.style.height = "100%";
        wForm.style.width = "100%";
        wForm.style.backgroundColor = "#ffffff";
        wForm.style.padding = "15px";
        wForm.style.borderBottomLeftRadius = "12px";
        wForm.style.borderBottomRightRadius = "12px";

        var nameInput = document.createElement("input");
        nameInput.id = "w-name";
        nameInput.className = "w-input";
        nameInput.placeholder = "Nombre";
        nameInput.style.border = "1px solid #ccc";
        nameInput.style.borderRadius = "4px";
        nameInput.style.fontFamily = "sans-serif"
        nameInput.style.fontSize = "15px";
        nameInput.style.padding = "5px 11px";
        nameInput.style.fontWeight = "lighter";
        nameInput.required = true;
        nameInput.type = "text";

        var nameContainer = document.createElement("div");
        nameContainer.className = "w-input-container";
        nameContainer.style.display = "flex";
        nameContainer.style.paddingBottom = "16px";
        nameContainer.style.flexDirection = "column";
        nameContainer.appendChild(nameInput);
        wForm.appendChild(nameContainer);

        var emailInput = document.createElement("input");
        emailInput.id = "w-email";
        emailInput.className = "w-input";
        emailInput.placeholder = "Su correo electrónico*";
        emailInput.style.border = "1px solid #ccc";
        emailInput.style.borderRadius = "4px";
        emailInput.style.fontFamily = "sans-serif"
        emailInput.style.fontSize = "15px";
        emailInput.style.padding = "5px 11px";
        emailInput.style.fontWeight = "lighter";
        emailInput.required = true;
        emailInput.type = "email";

        var emailContainer = document.createElement("div");
        emailContainer.className = "w-input-container";
        emailContainer.style.display = "flex";
        emailContainer.style.paddingBottom = "16px";
        emailContainer.style.flexDirection = "column";
        emailContainer.appendChild(emailInput);
        wForm.appendChild(emailContainer);

        var phoneInput = document.createElement("input");
        phoneInput.id = "w-phone";
        phoneInput.className = "w-input";
        phoneInput.placeholder = "Su teléfono";
        phoneInput.style.border = "1px solid #ccc";
        phoneInput.style.borderRadius = "4px";
        phoneInput.style.fontFamily = "sans-serif"
        phoneInput.style.fontSize = "15px";
        phoneInput.style.padding = "5px 11px";
        phoneInput.style.fontWeight = "lighter";
        phoneInput.required = true;
        phoneInput.type = "text";

        var phoneContainer = document.createElement("div");
        phoneContainer.className = "w-input-container";
        phoneContainer.style.display = "flex";
        phoneContainer.style.paddingBottom = "16px";
        phoneContainer.style.flexDirection = "column";
        phoneContainer.appendChild(phoneInput);
        wForm.appendChild(phoneContainer);

        var doubtInput = document.createElement("textarea");
        doubtInput.id = "w-doubt";
        doubtInput.className = "w-input";
        doubtInput.placeholder = "Su mensaje*";
        doubtInput.style.border = "1px solid #ccc";
        doubtInput.style.borderRadius = "4px";
        doubtInput.style.fontFamily = "sans-serif"
        doubtInput.style.fontSize = "15px";
        doubtInput.style.padding = "5px 11px";
        doubtInput.style.fontWeight = "lighter";
        doubtInput.style.height = "78px";
        doubtInput.required = true;
        doubtInput.type = "text";

        var doubtContainer = document.createElement("div");
        doubtContainer.className = "w-input-container";
        doubtContainer.style.display = "flex";
        doubtContainer.style.paddingBottom = "16px";
        doubtContainer.style.flexDirection = "column";
        doubtContainer.appendChild(doubtInput);
        wForm.appendChild(doubtContainer);

        var submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.className = "w-button";

        submitButton.style.marginTop = "15px";
        submitButton.style.width = "100%";
        submitButton.style.height = "40px";
        submitButton.style.backgroundColor = "#25d366";
        submitButton.style.color = "#ffffff";
        submitButton.style.border = "0";
        submitButton.style.borderRadius = "4px";
        submitButton.style.fontFamily = "sans-serif"
        submitButton.style.fontSize = "15px";
        submitButton.style.fontWeight = "bold";
        submitButton.style.fontWeight = "lighter";
        submitButton.style.cursor = "pointer";
        submitButton.textContent = "Iniciar la conversación";
        wForm.appendChild(submitButton);

        wContainer.appendChild(wForm);
        document.body.appendChild(wContainer);


        var style = document.createElement("style");
        style.textContent = `
        @media (max-width: 768px) {
            #w-container {
                width: 100% !important;
                height: 100%;
                bottom: 0 !important;
                right: 0 !important;
                z-index: 99 !important;
            }

            #floating-button {
                z-index: 100;
            }
        }
    `;
        document.head.appendChild(style);


        let whatsappForm = document.querySelector("#w-form");
        whatsappForm.addEventListener("submit", (e) => {
            e.preventDefault();
            let queryParams = [];
            let name = document.querySelector("#w-name");
            let email = document.querySelector("#w-email");
            let phone = document.querySelector("#w-phone");
            let doubt = document.querySelector("#w-doubt");

            queryParams.push(`name=${encodeURIComponent(name.value)}`);
            queryParams.push(`email=${encodeURIComponent(email.value)}`);
            queryParams.push(`phone=${encodeURIComponent(phone.value)}`);
            queryParams.push(`doubt=${encodeURIComponent(doubt.value)}`);

            queryParams.push(`sellerId=${encodeURIComponent(params.get("sellerId") || 0)}`);
            queryParams.push(`adId=${encodeURIComponent(params.get("adId") || 0)}`);

            let hostUrl = new URL(window.location.href);
            queryParams.push(`utm_source=${encodeURIComponent(hostUrl.href)}`);

            queryParams = queryParams.join("&");

            window.open(`https://beta.maxipublica.com/widgets/redirect/79859582-2105-4d30-b6ea-dc219982e96f?${queryParams}`, "_blank");
            name.value = "";
            email.value = "";
            phone.value = "";
            doubt.value = "";
        });

    })
})()
