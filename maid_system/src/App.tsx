import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "@/pages/Home";
import MaidDetail from "@/pages/MaidDetail";
import MaidByCodeRedirect from "@/pages/MaidByCodeRedirect";
import AdminLogin from "@/pages/admin/AdminLogin";
import AdminLayout from "@/pages/admin/AdminLayout";
import AdminMaidList from "@/pages/admin/AdminMaidList";
import AdminMaidEdit from "@/pages/admin/AdminMaidEdit";
import RequireAdmin from "@/pages/admin/RequireAdmin";
import { AppBootstrap } from "@/components/AppBootstrap";

export default function App() {
  return (
    <Router>
      <AppBootstrap />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/m/:code" element={<MaidByCodeRedirect />} />
        <Route path="/maids/by-code/:code" element={<MaidByCodeRedirect />} />
        <Route path="/maids/:maidId" element={<MaidDetail />} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <RequireAdmin>
              <AdminLayout />
            </RequireAdmin>
          }
        >
          <Route index element={<Navigate to="/admin/maids" replace />} />
          <Route path="maids" element={<AdminMaidList />} />
          <Route path="maids/new" element={<AdminMaidEdit mode="create" />} />
          <Route path="maids/:maidId" element={<AdminMaidEdit mode="edit" />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
