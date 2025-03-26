// Validate Claim Function
function validateClaim() {
    const policyNumber = document.getElementById("policy-number").value;
    const claimAmount = parseFloat(document.getElementById("claim-amount").value);
    const claimReason = document.getElementById("claim-reason").value;
    const resultContainer = document.getElementById("resultContainer");
  
    // Dummy Validation Logic (Replace with backend validation later)
    let result = "";
    let status = "";
  
    if (policyNumber === "" || isNaN(claimAmount) || claimReason === "") {
      alert("Please fill all fields.");
      return;
    }
  
    if (claimAmount < 1000) {
      result = "Your claim has been approved!";
      status = "approved";
    } else if (claimAmount >= 1000 && claimAmount < 10000) {
      result = "Your claim needs manual review.";
      status = "review";
    } else {
      result = "Your claim has been rejected due to high claim amount.";
      status = "rejected";
    }
  
    // Display Validation Result
    resultContainer.className = `result-container ${status}`;
    resultContainer.innerHTML = `
      <h3>Validation Result:</h3>
      <p>${result}</p>
    `;
  }
  