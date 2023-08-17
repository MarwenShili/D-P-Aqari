import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModalsProvider from "./components/ModalsProvider";
import MainLayout from "./layouts/MainLayout";
import Progress from "./components/Progress/Progress";
import NotFoundView from "./components/NotFound";

import { lazy } from "react";
import { Suspense } from "react";

const RoutesProvider = () => {
  const DPView = lazy(() => import("./views/DirectProfileProperty"));

  return (
    <BrowserRouter>
      <Suspense fallback={<Progress />}>
        <Routes>
          {/* Users Routes */}
          <Route path="/DP/:ref_no" element={<MainLayout />}>
            <Route index element={<DPView />} />
          </Route>
          {/* Uncreated Routes */}
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
      <ModalsProvider />
    </BrowserRouter>
  );
};

export default RoutesProvider;
