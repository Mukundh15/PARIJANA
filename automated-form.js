// Load User Data from localStorage
window.onload = function() {
    const name = localStorage.getItem("userName") || "";
    const email = localStorage.getItem("userEmail") || "";
    const policyNumber = localStorage.getItem("userPolicyNumber") || "";
  
    document.getElementById("name").value = name;
    document.getElementById("email").value = email;
    document.getElementById("policy-number").value = policyNumber;
  };
  
  // Extract Text using OCR (Optional)
  function extractText() {
    const fileInput = document.getElementById("ocrFile");
    const resultContainer = document.getElementById("ocrResult");
  
    if (fileInput.files.length === 0) {
      alert("Please upload a document first.");
      return;
    }
  
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function() {
      Tesseract.recognize(reader.result, 'eng', {
        logger: m => console.log(m)
      }).then(({ data: { text } }) => {
        resultContainer.innerHTML = `<strong>Extracted Text:</strong> <p>${text}</p>`;
      });
    };
    reader.readAsDataURL(file);
  }
  
  // Form Submission
  document.getElementById("claimForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Claim submitted successfully!");
    document.getElementById("claimForm").reset();
  });
  