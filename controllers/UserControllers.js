// Route pour créer un nouvel utilisateur


exports.createuser = async (req, res) =>  {
    try {
        const { nom, email, motDePasse } = req.body;
        const nouvelUtilisateur = new User({ nom, email, motDePasse });
        const dateCreation = await nouvelUtilisateur.save();
        res.status(201).json(dateCreation);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

