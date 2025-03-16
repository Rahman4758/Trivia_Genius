import cors from "cors";

const corsOptions = {
    origin: "*", // Change to frontend URL in production
    credentials: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
};

export default cors(corsOptions);
