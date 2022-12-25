<?php

/**
 * The data models for any operation that revolves around Strings
 */
class Word
{
    /**
     * The needle that will be used
     */
    private string $needle;
    /**
     * The haystack that might contain the needle
     */
    private string $haystack;
    /**
     * The input that will be checked to verify that it is a palindrome
     */
    private string $input;
    /**
     * The output that will be returned after processing the data
     */
    private int | bool $output;
    public function __construct()
    {
    }
    public function getNeedle(): string
    {
        return $this->needle;
    }
    public function setNeedle(string $needle): void
    {
        $this->needle = $needle;
    }
    public function getHaystack(): string
    {
        return $this->haystack;
    }
    public function setHaystack(string $haystack): void
    {
        $this->haystack = $haystack;
    }
    public function getInput(): string
    {
        return $this->input;
    }
    public function setInput(string $input): void
    {
        $this->input = $input;
    }
    public function getOutput(): int | bool
    {
        return $this->output;
    }
    public function setOutput(int | bool $output): void
    {
        $this->output = $output;
    }
    /**
     * Finding the amount of occurences of a needle inside of a haystack
     */
    public function findNeedle(): void
    {
        $request = json_decode(file_get_contents("php://input"));
        $this->setNeedle($request->needle);
        $this->setHaystack($request->haystack);
        $this->setOutput(substr_count($this->getHaystack(), $this->getNeedle()));
        $response = array(
            "status" => 0,
            "message" => $this->getOutput()
        );
        header('Content-Type: application/json', true, 200);
        echo json_encode($response);
    }
    /**
     * Checking if a string is a palindrome
     */
    public function findPalindrome(): void
    {
        $request = json_decode(file_get_contents("php://input"));
        $this->setInput($request->input);
        $reverseString = strrev($this->getInput());
        if ($this->getInput() == $reverseString) {
            $this->setOutput(true);
        } else {
            $this->setOutput(false);
        }
        $response = array(
            "status" => 0,
            "message" => $this->getOutput()
        );
        header('Content-Type: application/json', true, 200);
        echo json_encode($response);
    }
}
