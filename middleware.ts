import {
  authMiddleware,
  clerkMiddleware,
  createRouteMatcher,
} from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/(auth|api|trpc)(.*)",
  "/(auth|api|trpc)",
  "/",
]);

export default clerkMiddleware((auth, req) => {
  ["/api/uploadthing"];
  if (isProtectedRoute(req)) auth().protect();
});
