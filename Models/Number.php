<?php

/**
 * The data models for any operation that revolves around integers and floats
 */
class Number
{
    /**
     * Input
     */
    private int | float $input;
    /**
     * Input
     */
    private int | float $output;
    public function __construct()
    {
    }
    public function getInput(): int | float
    {
        return $this->input;
    }
    public function setInput(int | float $input): void
    {
        $this->input = $input;
    }
    public function getOutput(): int | float
    {
        return $this->output;
    }
    public function setOutput(int | float $output): void
    {
        $this->output = $output;
    }
    /**
     * Calculating the factorial of a number
     */
    public function factorial(): void
    {
        $request = json_decode(file_get_contents("php://input"));
        $this->setInput($request->value);
        $result = 1;
        for ($index = $this->getInput(); $index >= 1; $index--) {
            $result *= $index;
        }
        $this->setOutput($result);
        $response = array(
            "status" => 0,
            "message" => $this->getOutput()
        );
        header('Content-Type: application/json', true, 300);
        echo json_encode($response);
    }
}
