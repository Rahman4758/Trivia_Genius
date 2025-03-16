import app from "./app.js";
import "./src/config/dotenvConfig.js"

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
