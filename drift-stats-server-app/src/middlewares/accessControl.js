const accessControl = {
  roles: {
    user: ["read_own_data", "create", "update_own", "delete_own"],
    admin: ["read_all_data", "create", "update_any", "delete_any"],
  },

  checkPermission: (requiredPermission) => {
    return async (req, res, next) => {
      try {
        const user = req.user;
        const userPermissions = accessControl.roles[user.role];

        if (!userPermissions || !userPermissions.includes[requiredPermission]) {
          return res.status(403).json({ error: "Permissions nerastas" });
        }

        next();
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };
  },
};

module.exports = accessControl;
