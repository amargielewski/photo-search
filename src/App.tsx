import { HashRouter, Routes, Route } from "react-router-dom";

//constans
import { paths } from "constans";

//layouts
import { MainLayout } from "Layouts";

//pages
import { MainPage, SearchPage } from "Pages";

//Providers
import {
  ThemeProvider,
  ThemeModeProvider,
  NotificationProvider,
  LayoutContextProvider,
} from "Providers";
import {} from "Providers/layout";

function App() {
  return (
    <HashRouter>
      <LayoutContextProvider>
        <ThemeModeProvider>
          <ThemeProvider>
            <NotificationProvider>
              <MainLayout>
                <Routes>
                  <Route path={paths.home} element={<MainPage />} />
                  <Route path={paths.searchID} element={<SearchPage />} />
                </Routes>
              </MainLayout>
            </NotificationProvider>
          </ThemeProvider>
        </ThemeModeProvider>
      </LayoutContextProvider>
    </HashRouter>
  );
}

export default App;
