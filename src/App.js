import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from './routes'
import DefaultLayout from './components/layouts/DefaulLayot';
import './components/GlobalStyles/global.scss'
import './components/GlobalStyles/grid.css'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            {
                routes.map((route, index) => {
                    const Page = route.page
                    return (
                        <Route key={index} path={route.path} 
                            element={
                              <DefaultLayout>
                                <Page />
                              </DefaultLayout>
                            }
                        />
                    )
                })
            }
        </Routes>
    </BrowserRouter>
  );
}

export default App;
