import router from "./jwtAuth.js";
import pool from "../database.js";
import authorization from "../middleware/authorization.js";

router.get("/profile", authorization, async (req, res)=>{
  try{
    //req.user has the payload
    const user = await pool.query("SELECT f_name, user_id FROM users WHERE user_id = $1", [req.user]);
    res.json(user.rows[0]);
  }catch(error){
    console.log(error.message);
    res.status(500).json("Server Error");
  }
});

router.post("/random", authorization, async (req, res) => {
    try {
      const {count} = req.body;
      const numPosts = parseInt(count, 10) || 1; 
  
      const result = await pool.query("SELECT * FROM post ORDER BY id DESC");
      const posts = result.rows;
  
      if (posts.length === 0) {
        return res.status(404).send("No posts found");
      }
  
      const shuffledPosts = posts.sort();
      const randomPosts = shuffledPosts.slice(0, numPosts);
  
      res.json(randomPosts);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  });

  router.get("/posts/:id", authorization, async (req, res) => {
    const { id } = req.params;

    try {
      const result = await pool.query("SELECT * FROM post WHERE id = $1 ORDER BY id DESC", [id]);
      const post = result.rows[0];
  
      if (!post) {
        return res.status(404).send("No post found");
      }

      res.json(post);
    } catch (error) {
      console.error("Error fetching post:", error);
      res.status(500).send("Server error");
    }
  });
  
  router.post("/features", authorization, async (req, res) => {
    const topic = req.body.topic;
  
    if (!topic) {
      return res.status(400).json({ error: "Topic is required" });
    }
  
    try {
      const result = await pool.query("SELECT * FROM post WHERE topic = $1 ORDER BY id DESC", [topic]);
      if (result.rows.length === 0) {
        return res.status(404).json({ message: "No posts found for the given topic" });
      }
  
      res.json(result.rows);
    } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).json({ error: "Server error" });
    }
  });

  router.post("/activity/:id", authorization, async (req, res)=>{

    const {id} = req.params;

    try{
      const result = await pool.query("SELECT post.id, topic, title, post_date, post_content FROM users JOIN post ON users.user_id = post.user_id WHERE users.user_id = $1 ORDER BY id DESC", [id]);
      if (result.rows.length === 0) {
        return res.status(404).json([]);
      }
      res.json(result.rows);
    }catch(error){
      console.error("Error fetching posts:", error)
    }
  });

  router.delete("/delete/:id", authorization, async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query("DELETE FROM post WHERE id=$1 RETURNING *", [id]);
        if (result.rowCount === 0) {
            return res.status(404).send("Post not found");
        }
        res.json({ message: "Post deleted successfully" });
    } catch (error) {
        console.error("Error deleting post:", error);
        res.status(500).send("Server error");
    }
});


  router.post("/create/:id", authorization, async (req, res)=>{
    const {id} = req.params;
    const{topic, title, content} = req.body;

    try{
      const result = await pool.query("INSERT INTO post (user_id, topic, title, post_content) VALUES($1, $2, $3, $4) RETURNING *", [id, topic, title, content]);
      res.json({ message: 'Successful Queried' });
    }catch(error){
      console.error("Error fetching posts:", error)
    }
  })

  router.get("/edit/:id", authorization, async (req, res) => {
    const { id } = req.params;
    try {
      const result = await pool.query("SELECT * FROM post WHERE id = $1", [id]);
      if (result.rows.length === 0) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.json(result.rows[0]);
    } catch (error) {
      console.error("Error fetching post for editing:", error);
      res.status(500).send("Server error");
    }
  });

  router.put("/update/:id", authorization, async (req, res) => {
    const { id } = req.params;
    const { topic, title, content } = req.body;
    try {
      const result = await pool.query("UPDATE post SET topic = $1, title = $2, post_content = $3 WHERE id = $4 RETURNING *", [topic, title, content, id]);
      if (result.rows.length === 0) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.json(result.rows[0]);
    } catch (error) {
      console.error("Error updating post:", error);
      res.status(500).send("Server error");
    }
  });

export default router;