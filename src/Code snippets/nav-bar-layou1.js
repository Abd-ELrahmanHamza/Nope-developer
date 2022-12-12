const nav_bar = {
  "name": "nav",
  "style": {
    "bootstrap": "navbar navbar-expand-lg navbar-light bg-light"
  },
  "children": [
    {
      "name": "a",
      "style": {
        "bootstrap": "navbar-brand"
      },
      "children": [],
      "text": "Navbar"
    },
    {
      "name": "button",
      "style": {
        "bootstrap": "navbar-toggler"
      },
      "children": [
        {
          "name": "span",
          "style": {
            "bootstrap": "navbar-toggler-icon"
          },
          "children": [],
          "text": ""
        }
      ],
      "text": ""
    },
    {
      "name": "div",
      "style": {
        "bootstrap": "collapse navbar-collapse"
      },
      "children": [
        {
          "name": "ul",
          "style": {
            "bootstrap": "navbar-nav mr-auto"
          },
          "children": [
            {
              "name": "li",
              "style": {
                "bootstrap": "nav-item active"
              },
              "children": [
                {
                  "name": "a",
                  "style": {
                    "bootstrap": "nav-link"
                  },
                  "children": [],
                  "text": "Home"
                }
              ],
              "text": ""
            },
            {
              "name": "li",
              "style": {
                "bootstrap": "nav-item"
              },
              "children": [
                {
                  "name": "a",
                  "style": {
                    "bootstrap": "nav-link"
                  },
                  "children": [],
                  "text": "Link"
                }
              ],
              "text": ""
            },
            {
              "name": "li",
              "style": {
                "bootstrap": "nav-item dropdown"
              },
              "children": [
                {
                  "name": "a",
                  "style": {
                    "bootstrap": "nav-link dropdown-toggle"
                  },
                  "children": [],
                  "text": "Dropdown"
                },
                {
                  "name": "div",
                  "style": {
                    "bootstrap": "dropdown-menu"
                  },
                  "children": [
                    {
                      "name": "a",
                      "style": {
                        "bootstrap": "dropdown-item"
                      },
                      "children": [],
                      "text": "Action"
                    },
                    {
                      "name": "a",
                      "style": {
                        "bootstrap": "dropdown-item"
                      },
                      "children": [],
                      "text": "Another action"
                    },
                    {
                      "name": "div",
                      "style": {
                        "bootstrap": "dropdown-divider"
                      },
                      "children": [],
                      "text": ""
                    },
                    {
                      "name": "a",
                      "style": {
                        "bootstrap": "dropdown-item"
                      },
                      "children": [],
                      "text": "Something else here"
                    }
                  ],
                  "text": ""
                }
              ],
              "text": ""
            },
            {
              "name": "li",
              "style": {
                "bootstrap": "nav-item"
              },
              "children": [
                {
                  "name": "a",
                  "style": {
                    "bootstrap": "nav-link disabled"
                  },
                  "children": [],
                  "text": "Disabled"
                }
              ],
              "text": ""
            }
          ],
          "text": ""
        }
      ],
      "text": ""
    }
  ],
  "text": ""
};