(function () {
    const form = document.querySelector(".form-contato");
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const assunto = document.getElementById("assunto");
    const pais = document.getElementById("pais");
    const estado = document.getElementById("estado");
    const mensagem = document.getElementById("mensagem");
    const submitButton = form ? form.querySelector("button[type='submit']") : null;

    if (!form || !nome || !email || !mensagem || !submitButton) {
        return;
    }

    const EMAILJS_CONFIG = {
        serviceId: "service_tm0x07q",
        templateId: "template_d9xjn2p",
        publicKey: "N_bABB7R7S2Zps_DY"
    };

    const feedback = document.createElement("p");
    feedback.className = "form-feedback";
    feedback.setAttribute("aria-live", "polite");
    form.appendChild(feedback);

    const requiredFields = [nome, email, mensagem];
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
    let lastSendTime = 0;

    function setFeedback(message, type) {
        feedback.textContent = message;
        feedback.className = "form-feedback" + (type ? " is-" + type : "");
    }

    function toggleFieldError(field, hasError) {
        field.classList.toggle("input-error", hasError);
        field.setAttribute("aria-invalid", hasError ? "true" : "false");
    }

    function clearErrors() {
        requiredFields.forEach(function (field) {
            toggleFieldError(field, false);
        });
    }

    function validateForm() {
        clearErrors();
        let isValid = true;

        if (!nome.value.trim()) {
            toggleFieldError(nome, true);
            isValid = false;
        }

        if (!emailPattern.test(email.value.trim())) {
            toggleFieldError(email, true);
            isValid = false;
        }

        if (!mensagem.value.trim()) {
            toggleFieldError(mensagem, true);
            isValid = false;
        }

        if (mensagem.value.trim().length > 2000) {
            setFeedback("Mensagem muito longa.", "error");
            return false;
        }

        if (!isValid) {
            setFeedback("Preencha nome, e-mail válido e mensagem.", "error");
        } else {
            setFeedback("", "");
        }

        return isValid;
    }

    function isEmailJsConfigured() {
        return !Object.values(EMAILJS_CONFIG).some(function (value) {
            return value.indexOf("YOUR_") === 0;
        });
    }

    async function sendWithEmailJs(templateParams) {
        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                service_id: EMAILJS_CONFIG.serviceId,
                template_id: EMAILJS_CONFIG.templateId,
                user_id: EMAILJS_CONFIG.publicKey,
                template_params: templateParams
            })
        });

        if (!response.ok) {
            throw new Error("EmailJS request failed");
        }
    }

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        
        const now = Date.now();
        if (now - lastSendTime < 5000) {
            setFeedback("Espera alguns segundos antes de enviar novamente.", "error");
            return;
        }
        lastSendTime = now;

        if (!validateForm()) {
            return;
        }

        if (!isEmailJsConfigured()) {
            setFeedback("Erro ao enviar mensagem. Configure as chaves do EmailJS no arquivo contato.js.", "error");
            return;
        }

        submitButton.disabled = true;
        submitButton.textContent = "Enviando...";
        setFeedback("", "");

        const honeypot = document.getElementById("website");
        if (honeypot && honeypot.value) {
            return;
        }

        const templateParams = {
            nome: nome.value.trim(),
            email: email.value.trim(),
            assunto: assunto.value.trim(),
            pais: pais.value,
            estado: pais.value === "BR" && estado ? estado.value : "",
            mensagem: mensagem.value.trim()
        };

        try {
            await sendWithEmailJs(templateParams);
            form.reset();
            const estadoContainer = document.getElementById("estado-container");
            if (estadoContainer) {
                estadoContainer.style.display = "none";
            }
            setFeedback("Mensagem enviada com sucesso.", "success");
        } catch (error) {
            setFeedback("Erro ao enviar mensagem.", "error");
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = "Enviar";
        }
    });

    requiredFields.forEach(function (field) {
        field.addEventListener("input", function () {
            if (field.value.trim()) {
                toggleFieldError(field, false);
            }

            if (field === email && field.value.trim()) {
                toggleFieldError(field, !emailPattern.test(field.value.trim()));
            }
        });
    });
})();
