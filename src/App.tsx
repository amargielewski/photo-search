import { MainLayout } from "Layouts/MainLayout/MainLayout";
import { MainPage } from "Pages";
import { ThemeProvider } from "Providers/theme";
import { ThemeModeProvider } from "Providers/themeMode";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ThemeModeProvider>
        <ThemeProvider>
          <MainLayout>
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>
          </MainLayout>
        </ThemeProvider>
      </ThemeModeProvider>
    </BrowserRouter>
  );
}

export default App;
