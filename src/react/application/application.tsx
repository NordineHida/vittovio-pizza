import { BrowserRouter, Route, Routes } from "react-router";
import { Header } from "../header/header";
import { Sidebar } from "../sidebar/sidebar";
import { ViewIngredients } from "../views/view-ingredients/view-ingredients";
import { ViewDashboard } from "../views/view-dashboard/view-dashboard";
import { ViewMenu } from "../views/view-menu/view-menu";
import { ViewOrders } from "../views/view-orders/view-orders";

export function Application() {
    return (
        <>
            <Header />

            <div className="content">
                <BrowserRouter>
                    <Sidebar />
                    <Routes>
                        <Route path="/" element={<ViewDashboard />} />
                        <Route path="/menu" element={<ViewMenu />} />
                        <Route path="/ingredients" element={<ViewIngredients />} />
                        <Route path="/orders" element={<ViewOrders />} />
                    </Routes>
                </BrowserRouter>

            </div>
        </>
    )
}