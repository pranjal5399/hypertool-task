const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const AuditLogSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: function genUUID() {
      return uuidv4();
    },
  },
  createdAt: { type: Date, default: Date.now },
  severity: { type: String, required: true },
  component: { type: String, required: true },
  context: { type: String, required: true },
  message: { type: String, required: true },
  tags: [String],
});

module.exports = mongoose.model("audit-log", AuditLogSchema);
