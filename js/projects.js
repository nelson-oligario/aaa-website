const innerGrid = document.querySelector("#projects-inner-grid");
innerGrid.innerHTML = "";

const projectsData = [
  {
    imageSrc: "images/project-images/project-image-1.jpg",
    headline: "Partnership and Support from Local Governments",
    description:
      "AAA partners with local governments to drive agricultural innovation, shaping policies, securing funding, and improving infrastructure to support farmers. Our collaboration enhances practices, fosters sustainability, and ensures future food security.",
  },
  {
    imageSrc: "images/project-images/project-image-2.jpg",
    headline: "Promoting Local Farmers' Products",
    description:
      "AAA supports local farmers by promoting their products and creating market opportunities. We raise awareness of high-quality, locally-grown goods, helping farmers reach more consumers and strengthen the local agricultural economy.",
  },
  {
    imageSrc: "images/project-images/project-image-3.jpg",
    headline: "Feeding Programs and Nutritional Guidance",
    description:
      "AAA is dedicated to fighting childhood malnutrition by providing essential feeding programs for malnourished kids. Through our efforts, we help nourish young minds and bodies, giving children the healthy start they deserve for a brighter future.",
  },
  {
    imageSrc: "images/project-images/project-image-4.jpg",
    headline: "A Strong Partnership with the Women's Organization",
    description:
      "AAA is dedicated to fighting childhood malnutrition by providing essential feeding programs for malnourished kids. Through our efforts, we help nourish young minds and bodies, giving children the healthy start they deserve for a brighter future.",
  },
  {
    imageSrc: "images/project-images/project-image-5.jpg",
    headline: "Providing COVID-19 Relief Aids to Local Farmers",
    description:
      "AAA is committed to supporting local farmers affected by the COVID-19 pandemic by providing essential relief aid. Our efforts help farmers recover, rebuild their livelihoods, and strengthen the resilience of agricultural communities during challenging times.",
  },
  {
    imageSrc: "images/project-images/project-image-6.jpg",
    headline: "Promoting Gardening is Fun",
    description:
      "AAA promotes gardening as a way to engage communities in agriculture, encouraging people to grow their own food and develop a deeper connection to sustainable farming practices. Our initiative fosters self-reliance, enhances food security, and inspires a new generation of growers.",
  },
];

const gridCardElement = (imageSrc, headline, description) => {
  return `<div class="grid-card">
              <div class="grid-content">
                <div class="image-placeholder" style="background-image: url(${imageSrc});">
             <!--
               <img
                    class="project-picture"
                    src="${imageSrc}"
                    alt=""
                  />
             -->
                </div>
                <div class="project-description">
                  <h4>${headline}</h4>
                  <p>
                    ${description}
                  </p>
                </div>
              </div>
              <div class="grid-button-container">
                <button
                  class="button button-primary button-sm project-button"
                  id="card-five-button"
                >
                  Learn More
                </button>
              </div>
            </div>`;
};

projectsData.forEach((prj) => {
  innerGrid.innerHTML += gridCardElement(
    prj.imageSrc,
    prj.headline,
    prj.description
  );
});