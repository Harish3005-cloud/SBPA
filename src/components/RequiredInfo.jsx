import React, { useState } from "react";
import "../styles/RequiredInfo.css";

import noteIcon from '../assets/svg/Note Copy.svg';
import calendarIcon from '../assets/svg/Calendar.svg';
import attachIcon from '../assets/svg/attach.svg';
import downloadIcon from '../assets/svg/download.svg';
import deleteIcon from '../assets/svg/delete.svg';
import pdfIcon from '../assets/svg/pdf.svg';
import viewPoliciesIcon from '../assets/svg/viewpolice.svg';

const RequiredInfo = () => {
  const [showNote, setShowNote] = useState(false);
  const [formData, setFormData] = useState({
    submissionType: "Abstract",
    title: "Optimizing CBG based HARQ Operations through Network Coding in RAN Systems",
    techArea: "Communication & Network",
    subTechArea: "Modern & Physical Layer",
    commercialization: "Exploratory",
    periodOfDevelopment: "2 Months",
    patentInformation: "Submitting For Grading",
    externalForumName: "XXX-XXX-XXXX-XXX",
    acceptanceDate: "24-May-2024",
    srListForum: "Yes",
    externalAward: "",
    attachment: {
      name: "Optimizing CBG based HARQ Operations through Network Coding in RAN Systems.pdf",
      date: "11 Sep, 2025",
      time: "12:24pm",
      size: "4MB",
    },
    comment: "XXX-XXX-XXX-XXX-X",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="required-info-container">
      <div className="required-info-header">
        {/* <img src={requiredInfoIcon} alt="Required Information" />
        <h2>Required Information</h2> */}
      </div>

      <div className="form-container">
        <div className="form-section">
          <div className="form-row">
            <div className="form-group">
              <label>Submission Type</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="submissionType"
                    value="Abstract"
                    checked={formData.submissionType === "Abstract"}
                    onChange={handleChange}
                  />
                  <span className="radio-label-text">Abstract</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="submissionType"
                    value="Full"
                    checked={formData.submissionType === "Full"}
                    onChange={handleChange}
                  />
                  <span className="radio-label-text">Full</span>
                </label>
              </div>
            </div>
            <div className={`note-box ${showNote ? 'open' : 'closed'}`}>
                <button
                  type="button"
                  className="note-toggle-btn"
                  title={showNote ? "Hide note" : "Show note"}
                  aria-expanded={showNote}
                  aria-controls="required-info-note"
                  onClick={() => setShowNote((s) => !s)}
                >
                  <img className="note-pin" src={noteIcon} alt="note" />
                </button>
                {showNote && (
                  <div id="required-info-note" className="note-content">
                    <button
                      type="button"
                      className="note-close-btn"
                      aria-label="Close note"
                      onClick={() => setShowNote(false)}
                    />
                    <p>Note:</p>
                    <p>
                      Guideline : <a href="#">SBPA Samsung Paper Guidelines</a>
                    </p>
                  </div>
                )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <label>Title <span className="required">*</span></label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Tech. Area <span className="required">*</span></label>
              <select name="techArea" value={formData.techArea} onChange={handleChange}>
                <option>Communication & Network</option>
              </select>
            </div>
            <div className="form-group">
              <label>Sub Tech. Area <span className="required">*</span></label>
              <select name="subTechArea" value={formData.subTechArea} onChange={handleChange}>
                <option>Modern & Physical Layer</option>
              </select>
            </div>
            <div className="form-group">
              <label>Commercialization <span className="required">*</span></label>
              <select name="commercialization" value={formData.commercialization} onChange={handleChange}>
                <option>Exploratory</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Period of Development <span className="required">*</span></label>
              <input
                type="text"
                name="periodOfDevelopment"
                value={formData.periodOfDevelopment}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Patent Information <span className="required">*</span></label>
              <select name="patentInformation" value={formData.patentInformation} onChange={handleChange}>
                <option>Submitting For Grading</option>
              </select>
            </div>
          </div>

          <h4>External Forum in which previously accepted</h4>
          <div className="form-row">
            <div className="form-group">
              <label>Name of the Forum <span className="required">*</span></label>
              <input
                type="text"
                name="externalForumName"
                value={formData.externalForumName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Acceptance Date <span className="required">*</span></label>
              <div className="date-input">
                <input
                  type="text"
                  name="acceptanceDate"
                  value={formData.acceptanceDate}
                  onChange={handleChange}
                />
                <img src={calendarIcon} alt="calendar" />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>SR List Forum</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="srListForum"
                    value="Yes"
                    checked={formData.srListForum === "Yes"}
                    onChange={handleChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="srListForum"
                    value="No"
                    checked={formData.srListForum === "No"}
                    onChange={handleChange}
                  />
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <label>External Award / Recognition <span className="required">*</span></label>
              <input
                type="text"
                name="externalAward"
                placeholder="Type the External Award"
                value={formData.externalAward}
                onChange={handleChange}
              />
            </div>
          </div>

          <h4 className="attachment-heading">Attachment</h4>
          <div className="attachment-box">
            <div className="attachment-upload">
                <p>Choose File</p>
                <p>PPF format - Max. 4MB</p>
            </div>
            <div className="attachment-buttons">
                <button className="attach-btn"><img src={attachIcon} alt="attach"/> Attach</button>
                <button className="download-btn"><img src={downloadIcon} alt="download"/> Download Template</button>
            </div>
          </div>

          {formData.attachment && (
            <>
            <h4  className="attachment-heading">Attachment</h4>
            <div className="attachment-details">
                <img src={pdfIcon} alt="pdf"/>
              <div className="file-info">
                <p>{formData.attachment.name}</p>
                <span>{formData.attachment.date} {formData.attachment.time} . {formData.attachment.size}</span>
              </div>
              <div className="file-actions">
                <img className="icon-download" src={downloadIcon} alt="download"/>
                <img className="icon-delete" src={deleteIcon} alt="delete"/>
              </div>
            </div>
            </>
          )}

          {/* Save as Draft just after attachment section, aligned to right */}
          <div className="save-draft-row">
            <button className="save-draft-btn">Save as Draft</button>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <label>Comment (Max 500 Chars)</label>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="form-actions">
            <button className="submit-btn">Submit</button>
        </div>

        <div className="view-policies">
            <img src={viewPoliciesIcon} alt=""/>
            <span>View Policies</span>
        </div>
      </div>
    </div>
  );
};

export default RequiredInfo;
