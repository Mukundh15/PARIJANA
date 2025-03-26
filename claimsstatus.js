// Example Claim Data (Replace with backend data later)
const claims = [
    {
      id: 1,
      title: "Car Insurance Claim",
      date: "2025-02-20",
      status: "pending",
      details: "Claim for car accident damage."
    },
    {
      id: 2,
      title: "Health Insurance Claim",
      date: "2025-01-15",
      status: "approved",
      details: "Claim for medical expenses."
    },
    {
      id: 3,
      title: "Travel Insurance Claim",
      date: "2024-12-05",
      status: "rejected",
      details: "Claim for lost baggage."
    }
  ];
  
  // Load Claims on Page Load
  window.onload = function() {
    const container = document.getElementById("claimStatusContainer");
  
    claims.forEach(claim => {
      const card = document.createElement("div");
      card.classList.add("claim-card");
  
      card.innerHTML = `
        <h3>${claim.title}</h3>
        <p>Date Submitted: ${claim.date}</p>
        <p>Status: <span class="status ${claim.status}">${claim.status.toUpperCase()}</span></p>
      `;
  
      card.addEventListener("click", () => {
        alert(`Details: ${claim.details}`);
      });
  
      container.appendChild(card);
    });
  };
  