import { online_plans } from "../lib/online-plans";

function onlinePlans(plansArray, parentElement) {
  const lists = document.querySelector(".lists_of_items");

  return plansArray.forEach((data) => {
    const renderData = document.createElement("div");
    renderData.classList.add("item");

    lists.appendChild(renderData);

    renderData.innerHTML = `
            <img src='${data.image}' alt='${data.title}' />

            <div class="like">
              <i class="bi bi-suit-heart fs-5 text-white"></i>
            </div>

            <div>
              <div class="rate_location">
              <i class="bi bi-star-fill fs-6"></i>
                <span>${data.rating}</span>
                <span>(${data.rate_count})</span>
                <span class="dot"></span>
                <span>${data.location}</span>
              </div>

              <h5>${data.title}</h5>
              <p>
                <span>From ${data.price} /</span> person
              </p>
            </div>`;

    parentElement.appendChild(lists);
  });
}

onlinePlans(
    online_plans,
    document.getElementById("online_plans")
  );