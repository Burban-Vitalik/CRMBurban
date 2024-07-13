import userProfile from "../models/userProfile";

const updateProfile = async (req: any, res: any) => {
  try {
    const { userId, firstName, lastName, email, age } = req.body;

    console.log("Received update data:", req.body); // Додайте це логування

    const updatedProfile = await userProfile.findOneAndUpdate(
      { userId },
      { firstName },
      { new: true } // Повертає новий документ після оновлення
    );

    console.log("Updated profile:", updatedProfile); // Додайте це логування

    res.json(updatedProfile);
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { updateProfile };
