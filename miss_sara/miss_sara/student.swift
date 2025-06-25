// Student.swift
import Foundation

struct Student: Codable {
    let name: String
    let program: String
    let totalLessons: Int
    let completedLessons: Int
    let price: Double
    let paid: Bool
    let lessonDates: [String]
    let notes: String?
}

struct Lesson: Codable {
    let date: String
    let completed: Bool
}
