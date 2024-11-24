// function HostingPlan(name, price, features, support) {
//   this.name = name;
//   this.price = price;
//   this.feature = features;
//   this.support = support;
// }
// const plans = [
//    new HostingPlan("Basic",  "$5/month" , ["10GB Storage", "100GB Bandwidth", "1 Domain"], "Email Support") ,
//    new HostingPlan("Pro", "$15/month", [ "50GB Storage", "500GB Bandwidth", "5 Domains"], " Email + Phone Support") ,
//    new HostingPlan("Business", "$25/month", ["Unlimited Storage", "Unlimited Bandwidth", "Unlimited Domains"], "24/7 Support") 
// ];


// const plansContainer = document.getElementById("plans-container");


function HostingPlan ( name, price, features, support) {
    this.name = name;
    this.price = price;
    this.features = features;
    this.support = support;
  }

  const plans = [
    new HostingPlan("Basic", "$5/month", ["10GB Storage", "100GB Bandwidth", "1 Domain"], "Email Support"),
    new HostingPlan("Pro", "$15/month", ["50GB Storage", "500GB Bandwidth", "5 Domains"], "Email + Phone Support"),
    new HostingPlan("Business", "$25/month", ["Unlimited Storage", "Unlimited Bandwidth", "Unlimited Domains"], "24/7 Support"),
  ];

  const plansContainer = document.getElementById("plans-container");

  plans.forEach(plan => {
    const card = document.createElement("div");
    card.className = "plan-card";

    card.innerHTML = `
      <h2 class="plan-name">${plan.name}</h2>
      <p class="plan-price">${plan.price}</p>
      <ul class="plan-features">
        ${plan.features.map(feature => `<li>${feature}</li>`).join("")}
      </ul>
      <p class="plan-support"><strong>Support:</strong> ${plan.support}</p>
      <button class="buy-now">Buy Now</button>
    `;

    card.querySelector(".buy-now").addEventListener("click", () => {
      alert(`You have selected the ${plan.name} Plan for ${plan.price}.`);
    });

    plansContainer.appendChild(card);
  });
