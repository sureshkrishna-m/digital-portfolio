const themeButton = document.querySelector(".theme-toggle");
const themeLabel = document.querySelector(".theme-toggle__label");
const themeIcon = document.querySelector(".theme-toggle__icon");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    const darkTheme = theme === "dark";
    themeButton.setAttribute("aria-label", `Switch to ${darkTheme ? "light" : "dark"} theme`);
    themeButton.setAttribute("aria-pressed", String(darkTheme));
    themeLabel.textContent = `${darkTheme ? "Light" : "Dark"} theme`;
    themeIcon.textContent = darkTheme ? "☀" : "◐";
}

setTheme(prefersDark ? "dark" : "light");

themeButton.addEventListener("click", () => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});

const resumeDownloadLink = document.querySelector('a[download="SureshKrishna-M-Resume.pdf"]');

resumeDownloadLink?.addEventListener("click", async (event) => {
    event.preventDefault();

    try {
        const response = await fetch(resumeDownloadLink.href);
        if (!response.ok) {
            throw new Error(`Resume download failed with HTTP ${response.status}`);
        }

        const pdf = await response.arrayBuffer();
        const signature = new TextDecoder().decode(pdf.slice(0, 5));
        if (signature !== "%PDF-") {
            throw new Error("The resume URL did not return a PDF file");
        }

        const pdfUrl = URL.createObjectURL(new Blob([pdf], { type: "application/pdf" }));
        const download = document.createElement("a");
        download.href = pdfUrl;
        download.download = resumeDownloadLink.download;
        download.hidden = true;
        document.body.append(download);
        download.click();
        download.remove();
        window.setTimeout(() => URL.revokeObjectURL(pdfUrl), 1000);
    } catch (error) {
        console.error(error);
        window.alert("Unable to download the resume PDF. Please try again later.");
    }
});
