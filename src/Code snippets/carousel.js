
const carousel = {
  name: "div",
  style: { bootstrap: "carousel slide" },
  children: [
    {
      name: "div",
      style: { bootstrap: "carousel-inner" },
      children: [
        {
          name: "div",
          style: { bootstrap: "carousel-item active" },
          children: [
            {
              name: "img",
              style: { bootstrap: "d-block w-100" },
              children: [],
              text: null,
              attributes: {
                alt: "First slide",
                src: "https://cdn.pixabay.com/photo/2016/12/27/22/31/converse-1935027_960_720.jpg",
              },
            },
          ],
          text: "",
          attributes: {},
        },
        {
          name: "div",
          style: { bootstrap: "carousel-item" },
          children: [
            {
              name: "img",
              style: { bootstrap: "d-block w-100" },
              children: [],
              text: null,
              attributes: {
                alt: "First slide",
                src: "https://cdn.pixabay.com/photo/2016/12/27/22/31/converse-1935027_960_720.jpg",
              },
            },
          ],
          text: "",
          attributes: {},
        },
        {
          name: "div",
          style: { bootstrap: "carousel-item" },
          children: [
            {
              name: "img",
              style: { bootstrap: "d-block w-100" },
              children: [],
              text: null,
              attributes: {
                alt: "First slide",
                src: "https://cdn.pixabay.com/photo/2016/12/27/22/31/converse-1935027_960_720.jpg",
              },
            },
          ],
          text: "",
          attributes: {},
        },
      ],
      text: "",
      attributes: {},
    },
    {
      name: "a",
      style: { bootstrap: "carousel-control-prev" },
      children: [
        {
          name: "span",
          style: { bootstrap: "carousel-control-prev-icon" },
          children: [],
          text: "",
          attributes: {
            "aria-hidden": "true",
          },
        },
        {
          name: "span",
          style: { bootstrap: "sr-only" },
          children: [],
          text: "Previous",
          attributes: {},
        },
      ],
      text: "",
      attributes: {
        href: "#carouselExampleControls",
        role: "button",
        "data-slide": "prev",
      },
    },
    {
      name: "a",
      style: { bootstrap: "carousel-control-next" },
      children: [
        {
          name: "span",
          style: { bootstrap: "carousel-control-next-icon" },
          children: [],
          text: "",
          attributes: {
            "aria-hidden": "true",
          },
        },
        {
          name: "span",
          style: { bootstrap: "sr-only" },
          children: [],
          text: "Next",
          attributes: {},
        },
      ],
      text: "",
      attributes: {
        href: "#carouselExampleControls",
        role: "button",
        "data-slide": "next",
      },
    },
  ],
  text: "",
  attributes: {
    id: "carouselExampleControls",
    "data-ride": "carousel",
  },
};
