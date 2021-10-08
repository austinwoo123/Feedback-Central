package com.company.FeedbackCentral.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Objects;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "notes")
public class Notes {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private Integer employeeId;
    private String positives;
    private String needImprovement;
    private String note;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Integer employeeId) {
        this.employeeId = employeeId;
    }

    public String getPositives() {
        return positives;
    }

    public void setPositives(String positives) {
        this.positives = positives;
    }

    public String getNeedImprovement() {
        return needImprovement;
    }

    public void setNeedImprovement(String needImprovement) {
        this.needImprovement = needImprovement;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Notes notes = (Notes) o;
        return Objects.equals(id, notes.id) && Objects.equals(employeeId, notes.employeeId) && Objects.equals(positives, notes.positives) && Objects.equals(needImprovement, notes.needImprovement) && Objects.equals(note, notes.note);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, employeeId, positives, needImprovement, note);
    }

    @Override
    public String toString() {
        return "Notes{" +
                "id=" + id +
                ", employeeId=" + employeeId +
                ", positives='" + positives + '\'' +
                ", needImprovement='" + needImprovement + '\'' +
                ", note='" + note + '\'' +
                '}';
    }

}

