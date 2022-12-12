// Import CSS file
import "./App.css";

// Import react router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import hooks
import React from "react";

// Import components
import Dashboard from "./Containers/Dashboard/Dashboard";
import Workspace from "./Containers/Workspace/Workspace";
import LoginSignUpContainer from "./Containers/LoginSignupContainer/LoginSignupContainer";
import { AuthProvider } from "./Authentication/Authentication";
import RequireAuth from "./Authentication/RequireAuth";
import { SelectedWidgetProvider } from "./Contexts/selectedWidget";
import { ShowStyleBarProvider } from "./Contexts/showStyleBar";
import { WidgetToEditProvider } from "./Contexts/widgetToEdit";
import { CurrentProjectProvider } from "./Contexts/currentProject";
import { WidgetsProvider } from "./Contexts/widgets";
import RequireProject from "./Contexts/RequireProject";
import { JsCodeProvider } from "./Contexts/jsCode";
import { HtmlCodeProvider } from "./Contexts/HtmlCode";
import PreviewPage from "./Containers/PreviewPage/PreviewPage";
import EditPage from "./Containers/EditPage/EditPage";
import LandingPage from "./Containers/LandingPage/LandingPage";

/**
 * App Component
 *
 * @Component
 * @returns {React.Component} The App component
 */
function App() {
  return (
    <AuthProvider>
      <WidgetsProvider>
        <SelectedWidgetProvider>
          <ShowStyleBarProvider>
            <WidgetToEditProvider>
              <CurrentProjectProvider>
                <JsCodeProvider>
                  <HtmlCodeProvider>
                    <Router>
                      <Routes>
                        <Route
                          path="/Dashboard"
                          element={
                            <RequireAuth>
                              <Dashboard />
                            </RequireAuth>
                          }
                        />
                        <Route
                          path="/Workspace"
                          element={
                            <RequireAuth>
                              <RequireProject>
                                <Workspace />
                              </RequireProject>
                            </RequireAuth>
                          }
                        />
                        <Route
                          path="/Preview"
                          element={
                            <RequireAuth>
                              <RequireProject>
                                <PreviewPage />
                              </RequireProject>
                            </RequireAuth>
                          }
                        />
                        <Route
                          path="/Edit"
                          element={
                            <RequireAuth>
                              <RequireProject>
                                <EditPage />
                              </RequireProject>
                            </RequireAuth>
                          }
                        />
                        <Route
                          path="/Login"
                          element={<LoginSignUpContainer />}
                        />
                        <Route
                          path="/Signup"
                          element={<LoginSignUpContainer />}
                        />
                        <Route path="/" element={<LandingPage />} />
                      </Routes>
                    </Router>
                  </HtmlCodeProvider>
                </JsCodeProvider>
              </CurrentProjectProvider>
            </WidgetToEditProvider>
          </ShowStyleBarProvider>
        </SelectedWidgetProvider>
      </WidgetsProvider>
    </AuthProvider>
  );
}

export default App;
